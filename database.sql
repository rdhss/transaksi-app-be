-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: data_transaksi
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `m_barang`
--

DROP TABLE IF EXISTS `m_barang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `m_barang` (
  `id` int NOT NULL AUTO_INCREMENT,
  `kode` varchar(10) DEFAULT NULL,
  `nama` varchar(100) DEFAULT NULL,
  `harga` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `m_barang`
--

LOCK TABLES `m_barang` WRITE;
/*!40000 ALTER TABLE `m_barang` DISABLE KEYS */;
INSERT INTO `m_barang` VALUES (11,'ZP5M','pel ajaib',122000),(12,'LIP2','kursi',35000),(13,'I5TR','meja',70000),(14,'YUI6','kulkas',150000),(15,'R1UJ','Dispenser',50000),(16,'19TX','Lemari',200000);
/*!40000 ALTER TABLE `m_barang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `m_customer`
--

DROP TABLE IF EXISTS `m_customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `m_customer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `kode` varchar(10) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `telp` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `m_customer`
--

LOCK TABLES `m_customer` WRITE;
/*!40000 ALTER TABLE `m_customer` DISABLE KEYS */;
INSERT INTO `m_customer` VALUES (2,'YUV6','fadil','62821999907'),(4,'E091','ridho','62832190000'),(7,'UJI8','ray','62812888888'),(8,'A3ED','wahyu','62853787878'),(9,'SAD1','herman','62818555059');
/*!40000 ALTER TABLE `m_customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_sales`
--

DROP TABLE IF EXISTS `t_sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_sales` (
  `id` int NOT NULL AUTO_INCREMENT,
  `kode` varchar(15) DEFAULT NULL,
  `tgl` datetime DEFAULT NULL,
  `cust_id` int DEFAULT NULL,
  `cust_name` varchar(45) DEFAULT NULL,
  `jumlah_barang` varchar(45) DEFAULT NULL,
  `subtotal` decimal(10,0) DEFAULT NULL,
  `diskon` decimal(10,0) DEFAULT NULL,
  `ongkir` decimal(10,0) DEFAULT NULL,
  `total_bayar` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_sales`
--

LOCK TABLES `t_sales` WRITE;
/*!40000 ALTER TABLE `t_sales` DISABLE KEYS */;
INSERT INTO `t_sales` VALUES (32,'696460-2808','2024-08-29 00:00:00',7,'ridho','50',1400000,1000,2000,1401000);
/*!40000 ALTER TABLE `t_sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_sales_det`
--

DROP TABLE IF EXISTS `t_sales_det`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_sales_det` (
  `sales_id` int NOT NULL,
  `barang_id` varchar(10) DEFAULT NULL,
  `harga_bandrol` decimal(10,0) DEFAULT NULL,
  `qty` int DEFAULT NULL,
  `diskon_pct` decimal(10,0) DEFAULT NULL,
  `diskon_nilai` decimal(10,0) DEFAULT NULL,
  `harga_diskon` decimal(10,0) DEFAULT NULL,
  `total` decimal(10,0) DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_sales_det`
--

LOCK TABLES `t_sales_det` WRITE;
/*!40000 ALTER TABLE `t_sales_det` DISABLE KEYS */;
INSERT INTO `t_sales_det` VALUES (32,'LIP2',35000,50,20,7000,28000,1400000,49);
/*!40000 ALTER TABLE `t_sales_det` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-05  1:37:21
