-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 21, 2022 at 05:39 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `products`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `prodname` varchar(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `category` varchar(10) NOT NULL,
  `price` int(11) NOT NULL,
  `barcode` bigint(255) NOT NULL,
  `pic` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `prodname`, `qty`, `category`, `price`, `barcode`, `pic`) VALUES
(1, 'Sidi ali', 20, 'Drinks', 6, 6111035002175, 'C:\\\\Users\\\\GAMER\\\\Desktop\\\\products\\\\sidiali.jpg'),
(2, 'Mixy', 10, 'Drinks', 4, 6111242102873, 'C:\\\\Users\\\\GAMER\\\\Desktop\\\\products\\\\Mixy.png'),
(3, 'Merendina', 15, 'Food', 2, 6111031003725, 'C:\\\\Users\\\\GAMER\\\\Desktop\\\\products\\\\merendina.jpg'),
(4, 'Tonik', 15, 'Food', 1, 6111031004234, 'C:\\\\Users\\\\GAMER\\\\Desktop\\\\products\\\\BImo-tonik.png'),
(60, 'harr', 3, 'Drinks', 5, 5555555555555555, 'C:\\\\Users\\\\GAMER\\\\Downloads\\\\iman1-01.jpg'),
(99, 'hhhhhhhhh', 2, 'Drinks', 120, 11111111111111, 'C:\\\\Users\\\\GAMER\\\\Downloads\\\\180872209_753889148631368_6584031044118619883_n.jpg'),
(100, 'test', 2, 'Food', 12, 202020202020202, 'C:\\\\Users\\\\GAMER\\\\Downloads\\\\FPm-HtvX0AsJ57u.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
