package com.example.demo.controller;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.pojo.Food;
import com.example.demo.pojo.Orderitem;
import com.example.demo.pojo.ReturnVO;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@Controller
@RequestMapping(value = "/api")
public class DemoController {
	@RequestMapping(value = "/test")
	@ResponseBody
	public String test() {
		return "ok";
	}

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@RequestMapping(value = "/food")
	@ResponseBody
	public Object food() {
		List<Map<String, Object>> list = jdbcTemplate.queryForList("select * from food");
		return list;
	}

	@RequestMapping(value = "/login")
	@ResponseBody
	public Object login(String username, String password) {
		ReturnVO result;
		try {
			String sql = "select name,password from manager where name='" + username + "' limit 1";
			Map<String, Object> userdata = jdbcTemplate.queryForMap(sql);
			if (userdata.get("password").equals(password)) {
				result = new ReturnVO("1", "登录成功");
			} else {
				result = new ReturnVO("-1", "密码错误");
			}
		} catch (Exception e) {
			result = new ReturnVO("-1", "用户不存在");
		}
		return result;

	}

	@RequestMapping(value = "/foodadd")
	@ResponseBody
	public Object foodadd(String name, long cost) {
		ReturnVO result;
		final String sql = "insert into food(name,cost ) values(?,?)";
		GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();
		jdbcTemplate.update(new PreparedStatementCreator() {
			public PreparedStatement createPreparedStatement(Connection connection) throws SQLException {
				PreparedStatement psst = connection.prepareStatement(sql, new String[] { "id" });
				psst.setString(1, name);
				psst.setLong(2, cost);
				return psst;
			}
		}, keyHolder);
		result = new ReturnVO("1", "添加成功", new Food(keyHolder.getKey().intValue(), name, cost));
		return result;
	}

	@RequestMapping(value = "/fooddelete")
	@ResponseBody
	public Object fooddelete(int id) {
		ReturnVO result;
		final String sql = "delete from food where id=?";
		Object[] params = { id };
		try {
			jdbcTemplate.update(sql, params);
			result = new ReturnVO("1", "删除成功");
			return result;
		} catch (Exception e) {
			result = new ReturnVO("-1", "删除失败");
			return result;
		}
	}

	@RequestMapping(value = "foodupdate")
	@ResponseBody
	public Object foodupdate(int id, String name, long cost) {
		ReturnVO result;
		final String sql = "update food set name=? ,cost=? where id=?";
		Object[] params = { name, cost, id };
		try {
			jdbcTemplate.update(sql, params);
			result = new ReturnVO("1", "修改成功", new Food(id, name, cost));
			return result;
		} catch (Exception e) {
			result = new ReturnVO("-1", "修改失败");
			return result;
		}
	}

	@RequestMapping(value = "ordersubmit")
	@ResponseBody
	public Object ordersubmit(@RequestBody Orderitem[] order) {
		final String sql = "insert into orders(time) values(NOW())";
		try {
			GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();
			jdbcTemplate.update(new PreparedStatementCreator() {
				public PreparedStatement createPreparedStatement(Connection connection) throws SQLException {
					PreparedStatement psst = connection.prepareStatement(sql,Statement.RETURN_GENERATED_KEYS);
					return psst;
				}
			}, keyHolder);
			int key = 1;
			for (Orderitem item : order) {
				final String sql1 = "insert into Orderitem(orderid,itemid,foodid,quantity) values(?,?,?,?)";
				Object[] params = { keyHolder.getKey().intValue(), key, item.getId(), item.getQuantity() };
				jdbcTemplate.update(sql1, params);
				key++;
			}
		} catch (Exception e) {
			System.out.println(e);
			return new ReturnVO("-1", "订单错误");
		}
		return new ReturnVO("1", "订单添加成功");
	}

	@RequestMapping(value = "salesget")
	@ResponseBody
	public Object soleget(){
		final String sql="SELECT id ,`name` ,COALESCE(SUM(quantity),0) AS sales from food LEFT JOIN orderitem ON foodid=id GROUP BY `name`,id ";
		List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
		return list;
	}
	
	@RequestMapping(value="ordersget")
	@ResponseBody
	public Object ordersget() {
		final String sql ="select orders.id,orders.time,itemid,name,cost,quantity from orders JOIN orderitem on orders.id=orderitem.orderid left join food on food.id=orderitem.foodid";
		List<Map<String, Object>> list = jdbcTemplate.queryForList(sql);
		return list;
	}
}
