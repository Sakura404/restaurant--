/*
 Navicat MySQL Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80023
 Source Host           : localhost:3306
 Source Schema         : restaurant

 Target Server Type    : MySQL
 Target Server Version : 80023
 File Encoding         : 65001

 Date: 11/06/2021 00:35:35
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for food
-- ----------------------------
DROP TABLE IF EXISTS `food`;
CREATE TABLE `food`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `cost` double(8, 2) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 22 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of food
-- ----------------------------
INSERT INTO `food` VALUES (1, 'Curry beef with rice', 60.00);
INSERT INTO `food` VALUES (2, 'Sushi set meal', 65.00);
INSERT INTO `food` VALUES (3, 'YangZhou fire rice', 45.00);
INSERT INTO `food` VALUES (4, 'Sirloin Steak with Spaghetti', 72.00);
INSERT INTO `food` VALUES (5, 'Chicken vegetable roll', 42.00);
INSERT INTO `food` VALUES (6, 'Soft drink', 10.00);
INSERT INTO `food` VALUES (7, 'Red wine', 15.00);
INSERT INTO `food` VALUES (8, 'Beer', 15.00);
INSERT INTO `food` VALUES (9, 'sandwich', 15.00);

-- ----------------------------
-- Table structure for manager
-- ----------------------------
DROP TABLE IF EXISTS `manager`;
CREATE TABLE `manager`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of manager
-- ----------------------------
INSERT INTO `manager` VALUES (1, 'root', '123456');

-- ----------------------------
-- Table structure for orderitem
-- ----------------------------
DROP TABLE IF EXISTS `orderitem`;
CREATE TABLE `orderitem`  (
  `orderid` int NOT NULL,
  `itemid` int NOT NULL,
  `foodid` int NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`orderid`, `itemid`) USING BTREE,
  CONSTRAINT `orderitem_ibfk_1` FOREIGN KEY (`orderid`) REFERENCES `orders` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orderitem
-- ----------------------------
INSERT INTO `orderitem` VALUES (9, 1, 3, 1);
INSERT INTO `orderitem` VALUES (9, 2, 4, 1);
INSERT INTO `orderitem` VALUES (9, 3, 6, 2);
INSERT INTO `orderitem` VALUES (10, 1, 1, 1);
INSERT INTO `orderitem` VALUES (10, 2, 3, 1);
INSERT INTO `orderitem` VALUES (10, 3, 7, 1);
INSERT INTO `orderitem` VALUES (10, 4, 9, 1);
INSERT INTO `orderitem` VALUES (11, 1, 2, 2);
INSERT INTO `orderitem` VALUES (11, 2, 9, 2);
INSERT INTO `orderitem` VALUES (12, 1, 2, 2);
INSERT INTO `orderitem` VALUES (12, 2, 9, 2);
INSERT INTO `orderitem` VALUES (13, 1, 1, 4);
INSERT INTO `orderitem` VALUES (13, 2, 2, 1);
INSERT INTO `orderitem` VALUES (13, 3, 3, 1);
INSERT INTO `orderitem` VALUES (13, 4, 4, 1);

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `time` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES (9, '2021-06-10 11:56:57');
INSERT INTO `orders` VALUES (10, '2021-06-10 13:49:56');
INSERT INTO `orders` VALUES (11, '2021-06-11 00:29:04');
INSERT INTO `orders` VALUES (12, '2021-06-11 00:29:04');
INSERT INTO `orders` VALUES (13, '2021-06-11 00:31:40');

SET FOREIGN_KEY_CHECKS = 1;
