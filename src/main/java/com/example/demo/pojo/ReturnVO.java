package com.example.demo.pojo;

public class ReturnVO {
	private String code;
	private String meg;
	private Object data;
	public ReturnVO(String c ,String m  ,Object d){
		this.code=c;
		this.meg=m;
		this.data=d;
	}
	public ReturnVO(String c, String m) {
		this.code=c;
		this.meg=m;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getMeg() {
		return meg;
	}
	public void setMeg(String meg) {
		this.meg = meg;
	}
	public Object getData() {
		return data;
	}
	public void setData(Object data) {
		this.data = data;
	}
}
