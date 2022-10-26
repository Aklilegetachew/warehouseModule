-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 26, 2022 at 04:30 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `warehouse`
--

-- --------------------------------------------------------

--
-- Table structure for table `accs_materials`
--

CREATE TABLE `accs_materials` (
  `id` int(11) NOT NULL,
  `accs_name` text NOT NULL,
  `accs_quantity` varchar(255) NOT NULL,
  `accs_description` text NOT NULL,
  `accs_materialcode` varchar(255) NOT NULL,
  `accs_spec` text NOT NULL,
  `accs_materialunit` text NOT NULL,
  `accs_value` text NOT NULL,
  `accs_referncenum` varchar(255) NOT NULL,
  `accs_date` date NOT NULL,
  `accs_remark` text NOT NULL,
  `accs_status` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `accs_materials`
--

INSERT INTO `accs_materials` (`id`, `accs_name`, `accs_quantity`, `accs_description`, `accs_materialcode`, `accs_spec`, `accs_materialunit`, `accs_value`, `accs_referncenum`, `accs_date`, `accs_remark`, `accs_status`) VALUES
(1, 'wetet', '20', 'Something to eat healthy', 'asd3EDFRTr', 'Its tasty', 'pcs', '1000000000', 'wWERWE56RW6E', '0000-00-00', 'get Status', ''),
(4, 'yogurt', '40', 'Something to eat healthy', 'asd3EDFRTr', 'Its tasty', 'pcs', '1000000000', 'wWERWE56RW6E', '0000-00-00', 'get Status', '');

-- --------------------------------------------------------

--
-- Table structure for table `finished_goods`
--

CREATE TABLE `finished_goods` (
  `id` int(11) NOT NULL,
  `finished_name` text NOT NULL,
  `finished_quantity` varchar(255) NOT NULL,
  `finished_description` text NOT NULL,
  `finished_materialcode` varchar(255) NOT NULL,
  `finished_spec` text NOT NULL,
  `finished_materialunit` text NOT NULL,
  `finished_value` text NOT NULL,
  `finished_referncenum` varchar(255) NOT NULL,
  `finished_date` date NOT NULL,
  `finished_remark` text NOT NULL,
  `finished_status` text NOT NULL,
  `finished_diameter` text NOT NULL,
  `finished_catag` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `finished_goods`
--

INSERT INTO `finished_goods` (`id`, `finished_name`, `finished_quantity`, `finished_description`, `finished_materialcode`, `finished_spec`, `finished_materialunit`, `finished_value`, `finished_referncenum`, `finished_date`, `finished_remark`, `finished_status`, `finished_diameter`, `finished_catag`) VALUES
(12, 'PPR', '123', 'Description', 'PPR1.1', 'PPR REDUCER', 'pcs', '100000', 'REF1', '0000-00-00', 'Remark', '', 'S25-S20', 'PPR'),
(13, 'PPR', '123', 'Description', 'PPR1.2', 'S25-S20', 'pcs', '100000', 'REF1', '0000-00-00', 'Remark', '', 'S32-S20', 'PPR'),
(14, 'PPR', '123', 'Description', 'PPR1.3', 'PPR REDUCER', 'pcs', '100000', 'REF1', '0000-00-00', 'Remark', '', 'S32-S25', 'PPR'),
(15, 'PPR', '123', 'Description', 'PPR1.4', 'PPR REDUCER', 'pcs', '100000', 'REF1', '0000-00-00', 'Remark', '', 'S40-S20', 'PPR'),
(16, 'PPR', '123', 'Description', 'PPR1.5', 'PPR REDUCER', 'pcs', '100000', 'REF1', '0000-00-00', 'Remark', '', 'S40-S25', 'PPR'),
(17, 'PPR', '123', 'Description', 'PPR1.6', 'PPR REDUCER', 'pcs', '100000', 'REF1', '0000-00-00', 'Remark', '', 'S40-S32', 'PPR'),
(18, 'PPR', '123', 'Description', 'PPR1.7', 'PPR REDUCER', 'pcs', '100000', 'REF1', '0000-00-00', 'Remark', '', 'S50-S20', 'PPR'),
(19, 'PPR', '123', 'Description', 'PPR1.8', 'PPR REDUCER', 'pcs', '100000', 'REF1', '0000-00-00', 'Remark', '', 'S50-S25', 'PPR'),
(20, 'PPR', '123', 'Description', 'PPR1.9', 'PPR REDUCER', 'pcs', '100000', 'REF1', '0000-00-00', 'Remark', '', 'S50-S32', 'PPR'),
(21, 'PPR', '123', 'Description', 'PPR10', 'PPR REDUCER', 'pcs', '100000', 'REF1', '0000-00-00', 'Remark', '', 'S50-S40', 'PPR'),
(22, 'PPR', '123', 'Description', 'PPR11', 'PPR REDUCER', 'pcs', '100000', 'REF1', '0000-00-00', 'Remark', '', 'S63-S20', 'PPR'),
(23, 'PPR', '123', 'Description', 'PPR12', 'PPR REDUCER', 'pcs', '100000', 'REF1', '0000-00-00', 'Remark', '', 'S63-S25', 'PPR'),
(24, 'PPR', '123', 'Description', 'PPR13', 'PPR REDUCER', 'pcs', '100000', 'REF1', '0000-00-00', 'Remark', '', 'S63-S32', 'PPR'),
(25, 'PPR', '123', 'Description', 'PPR14', 'PPR REDUCER', 'pcs', '100000', 'REF1', '0000-00-00', 'Remark', '', 'S63-S40', 'PPR'),
(26, 'PPR', '123', 'Description', 'PPR15', 'PPR REDUCER', 'pcs', '100000', 'REF1', '0000-00-00', 'Remark', '', 'S63-S50', 'PPR'),
(27, 'PPR', '123', 'Description', 'PPR2.1', 'PPR PLUG (TAP)', 'pcs', '100000', 'REF1', '0000-00-00', 'Remark', '', '20MM', 'PPR'),
(28, 'PPR', '123', 'Description', 'PPR2.2', 'PPR PLUG (TAP)', 'pcs', '100000', 'REF1', '0000-00-00', 'Remark', '', '25MM', 'PPR'),
(29, 'PPR', '123', 'Description', 'PPR3.1', 'PPR 4 WAY CONNECTOR', 'pcs', '100000', 'REF1', '0000-00-00', 'Remark', '', '20MM', 'PPR'),
(30, 'PPR', '123', 'Description', 'PPR3.2', 'PPR 4 WAY CONNECTOR', 'pcs', '100000', 'REF1', '0000-00-00', 'Remark', '', '25MM', 'PPR'),
(31, 'PPR', '123', 'Description', 'PPR3.3', 'PPR 4 WAY CONNECTOR', 'pcs', '100000', 'REF1', '0000-00-00', 'Remark', '', '32MM', 'PPR'),
(32, 'PPR', '123', 'Description', 'PPR3.5', 'PPR 4 WAY CONNECTOR', 'pcs', '100000', 'REF1', '0000-00-00', 'Remark', '', '50MM', 'PPR'),
(33, 'PPR FEMALE METAL ', '0', 'INSERT STRIGHT CONNECTOR', 'MAT01', 'INSERT STRIGHT CONNECTOR', 'pcs', '0', 'REF2', '0000-00-00', 'Remark', '', 'F20MM x 0.5 INCH + F25MM x 0.5 INCH', 'PPR'),
(34, 'PPR FEMALE METAL ', '0', 'INSERT STRIGHT CONNECTOR', 'MAT02', 'INSERT STRIGHT CONNECTOR', 'pcs', '0', 'REF3', '0000-00-00', 'Remark', '', 'F25MM x 0.25 INCH + F32MM x 1 INCH', 'PPR'),
(35, 'PPR FEMALE METAL ', '0', 'INSERT STRIGHT CONNECTOR', 'MAT02', 'INSERT STRIGHT CONNECTOR', 'pcs', '0', 'REF3', '0000-00-00', 'Remark', '', 'F40MM x 1.25 INCH + F50MM x 1.5 INCH', 'PPR'),
(36, 'PPR FEMALE METAL ', '0', 'INSERT STRIGHT CONNECTOR', 'MAT03', 'INSERT STRIGHT CONNECTOR', 'pcs', '0', 'REF4', '0000-00-00', 'Remark', '', 'F63MM x 21 INCH', 'PPR'),
(37, 'PPR MALE METAL ', '0', 'INSERT STRIGHT CONNECTOR', 'MAT04', 'INSERT STRIGHT CONNECTOR', 'pcs', '0', 'REF5', '0000-00-00', 'Remark', '', 'M20MM x 0.5 INCH + M25MM x 0.5 INCH', 'PPR'),
(38, 'PPR MALE METAL ', '0', 'INSERT STRIGHT CONNECTOR', 'MAT05', 'INSERT STRIGHT CONNECTOR', 'pcs', '0', 'REF6', '0000-00-00', 'Remark', '', 'M25MM x 1.5 INCH + M32MM x 1 INCH', 'PPR'),
(39, 'PPR MALE METAL ', '0', 'INSERT STRIGHT CONNECTOR', 'MAT05', 'INSERT STRIGHT CONNECTOR', 'pcs', '0', 'REF6', '0000-00-00', 'Remark', '', 'M40MM x 1.5 INCH + M50MM x 1.5 INCH', 'PPR');

-- --------------------------------------------------------

--
-- Table structure for table `material_request`
--

CREATE TABLE `material_request` (
  `id` int(11) NOT NULL,
  `mat_requestname` text NOT NULL,
  `mat_requestdate` date NOT NULL,
  `mat_requestdept` text NOT NULL,
  `mat_reqpersonid` text NOT NULL,
  `mat_description` text NOT NULL,
  `mat_quantity` text NOT NULL,
  `req_materialtype` text NOT NULL,
  `mat_status` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `material_request`
--

INSERT INTO `material_request` (`id`, `mat_requestname`, `mat_requestdate`, `mat_requestdept`, `mat_reqpersonid`, `mat_description`, `mat_quantity`, `req_materialtype`, `mat_status`) VALUES
(1, 'yogurt', '2022-08-10', 'sales', '3', 'something to watch', '10', 'ACCS', 'ACCEPTED'),
(2, 'Biscute', '2022-08-10', 'sales', '3', 'something to watch', '10', 'RAW', 'pending'),
(3, 'Plastic bag', '2022-08-10', 'sales', '3', 'something to watch', '10', 'FIN', 'pending'),
(4, 'Remote3', '0000-00-00', 'Sales', '7887', 'Aklile', '5', 'ACCS', 'PENDING'),
(5, 'Remote4', '0000-00-00', 'Sales', '7887', 'Aklile', '5', 'ACCS', 'PENDING'),
(6, 'Girl', '0000-00-00', 'Sales', '7887', 'Aklile', '5', 'ACCS', 'PENDING'),
(7, 'Boy', '0000-00-00', 'Sales', '7887', 'Aklile', '5', 'ACCS', 'PENDING'),
(8, 'Boy', '0000-00-00', 'Sales', '7887', 'Aklile', '5', 'ACCS', 'PENDING'),
(9, 'Girl', '0000-00-00', 'Sales', '7887', 'Aklile', '5', 'ACCS', 'PENDING'),
(10, 'Boy', '0000-00-00', 'Sales', '7887', 'Aklile', '5', 'ACCS', 'PENDING'),
(11, 'Girl', '0000-00-00', 'Sales', '7887', 'Aklile', '5', 'ACCS', 'PENDING'),
(12, 'Boy', '0000-00-00', 'Sales', '7887', 'Aklile', '5', 'ACCS', 'PENDING'),
(13, 'Girl', '0000-00-00', 'Sales', '7887', 'Aklile', '5', 'ACCS', 'PENDING'),
(14, 'Boy', '0000-00-00', 'Sales', '7887', 'Aklile', '5', 'ACCS', 'PENDING'),
(15, 'Girl', '0000-00-00', 'Sales', '7887', 'Aklile', '5', 'ACCS', 'PENDING'),
(16, 'Boy', '0000-00-00', 'Sales', '7887', 'Aklile', '5', 'ACCS', 'PENDING'),
(17, 'Girl', '0000-00-00', 'Sales', '7887', 'Aklile', '5', 'ACCS', 'PENDING'),
(19, 'Shelly Hood', '0000-00-00', 'Illum et sit volup', 'Quas neque dolorem e', 'Asperiores et rerum ', '103', 'ACCS', 'PENDING'),
(20, 'PVC', '0000-00-00', 'SALES', '675', 'PIPE', '67', 'FIN', 'PENDING'),
(21, 'PPR', '0000-00-00', 'SALES', '675', 'PIPE', '32', 'FIN', 'PENDING'),
(22, 'Condutes', '0000-00-00', 'Culpa ut voluptatum', 'Alias eaque aut volu', 'Unde qui totam duis ', '472', 'ACCS', 'PENDING'),
(23, 'Condute', '0000-00-00', 'SALES', '675', 'PIPE', '56', 'RAW', 'Pending'),
(24, 'Caleb Wilcox', '0000-00-00', 'Est totam esse archi', 'Sint obcaecati iure', 'Nihil quis numquam a', '599', 'ACCS', 'PENDING'),
(25, 'PVCK', '0000-00-00', 'SALES', 'Do quod non nostrum ', 'PIPE', '344', 'FIN', 'PENDING'),
(26, 'Raven Palmer', '0000-00-00', 'SALES', '234', 'Consequatur porro s', '860', 'FIN', 'PENDING'),
(27, 'Logan Mcintosh', '0000-00-00', 'SALES', '234', 'Et est eveniet aliq', '840', 'FIN', 'PENDING');

-- --------------------------------------------------------

--
-- Table structure for table `new_materials`
--

CREATE TABLE `new_materials` (
  `id` int(11) NOT NULL,
  `new_name` text NOT NULL,
  `new_quantity` varchar(255) NOT NULL,
  `new_description` text NOT NULL,
  `new_materialcode` varchar(255) NOT NULL,
  `new_spec` text NOT NULL,
  `new_materialunit` text NOT NULL,
  `new_value` text NOT NULL,
  `new_referncenum` varchar(255) NOT NULL,
  `new_materialtype` text NOT NULL,
  `new_date` date NOT NULL DEFAULT current_timestamp(),
  `new_remark` text NOT NULL,
  `new_status` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `new_materials`
--

INSERT INTO `new_materials` (`id`, `new_name`, `new_quantity`, `new_description`, `new_materialcode`, `new_spec`, `new_materialunit`, `new_value`, `new_referncenum`, `new_materialtype`, `new_date`, `new_remark`, `new_status`) VALUES
(17, 'PVC rasin', '200', 'With sample', 'URM1', 'Specification', 'kg', '45000', 'WER#ES', 'RAW', '2022-10-06', 'Remark', 'NEW'),
(18, 'PVC', '250', 'with sample', 'SRN1', 'spec', 'pcs', '34500', '43WE43TR', 'RAW', '2022-10-06', 'Remark', 'ACCEPTED'),
(19, 'Calcium Carbonate', '350', 'With sample', 'URM2', 'spec', 'KG', '3000000', 'RE4TY', 'RAW', '2022-10-06', 'Remark', 'ACCEPTED'),
(20, 'stablizer', '34', 'with sample', 'URM3', 'spec', 'PC', '3455', 'ER5', 'RAW', '2022-10-06', 'Remark', 'ACCEPTED'),
(21, 'Carbon', '23456', 'with sample', 'URM10', 'spec', 'KG', '234554', 'RE67', 'RAW', '2022-10-06', 'Remark', 'ACCEPTED'),
(22, 'PE Wax', '678', 'With sample', 'URM6', 'spec', 'KG', '7000', 'REF78', 'RAW', '2022-10-06', 'Remark', 'ACCEPTED'),
(23, 'Steric acid', '67', 'with sample', 'URM5', 'spec', 'PCs', '5600', 'ERT56', 'RAW', '2022-10-06', 'Remark', 'ACCEPTED'),
(24, 'CPE 135', '56', 'with sample', 'URM4', 'spec', 'Pcs', '3457', 'REF455', 'RAW', '2022-10-06', 'Remark', 'ACCEPTED'),
(25, 'PVC rasin', '100', 'with sample', 'URM1', 'specification', 'pcs', '10000', 'REF34', 'RAW', '2022-10-10', 'Remark', 'ACCEPTED'),
(26, 'Montana Farrell', '518', 'At vel enim sit des', 'Atque ipsum ex perf', 'Recusandae Providen', 'Dolorum qui esse ve', 'Fugiat reiciendis c', '553', 'Exercitation tempor ', '2022-10-13', 'Excepteur eius quo a', 'NEW');

-- --------------------------------------------------------

--
-- Table structure for table `purcase_requestform`
--

CREATE TABLE `purcase_requestform` (
  `id` int(11) NOT NULL,
  `request_material` text NOT NULL,
  `request_person` text NOT NULL,
  `request_materialid` varchar(255) NOT NULL,
  `request_qty` varchar(255) NOT NULL,
  `request_date` date NOT NULL,
  `request_department` text NOT NULL,
  `pur_status` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `purcase_requestform`
--

INSERT INTO `purcase_requestform` (`id`, `request_material`, `request_person`, `request_materialid`, `request_qty`, `request_date`, `request_department`, `pur_status`) VALUES
(1, 'TV', 'Aklile', '7887', '5', '0000-00-00', 'Sales', 'Pending'),
(2, 'Remote', 'Aklile', '7887', '5', '0000-00-00', 'Sales', 'Pending'),
(3, 'Remote1', 'Aklile', '7887', '5', '0000-00-00', 'Sales', 'Pending'),
(4, 'Remote2', 'Aklile', '7887', '5', '0000-00-00', 'Sales', 'Pending'),
(5, 'Remote1', 'Aklile', '7887', '5', '0000-00-00', 'Sales', 'Pending'),
(6, 'Remote2', 'Aklile', '7887', '5', '0000-00-00', 'Sales', 'Pending'),
(7, 'Remote1', 'Aklile', '7887', '5', '0000-00-00', 'Sales', 'Pending'),
(8, 'Remote2', 'Aklile', '7887', '5', '0000-00-00', 'Sales', 'Pending'),
(9, 'Remote1', 'Aklile', '7887', '5', '0000-00-00', 'Sales', 'Pending'),
(10, 'Remote2', 'Aklile', '7887', '5', '0000-00-00', 'Sales', 'Pending');

-- --------------------------------------------------------

--
-- Table structure for table `raw_materials`
--

CREATE TABLE `raw_materials` (
  `id` int(11) NOT NULL,
  `raw_name` text NOT NULL,
  `raw_quantity` varchar(255) NOT NULL,
  `raw_description` text NOT NULL,
  `raw_materialcode` varchar(255) NOT NULL,
  `raw_spec` text NOT NULL,
  `raw_materialunit` text NOT NULL,
  `raw_value` text NOT NULL,
  `raw_referncenum` varchar(255) NOT NULL,
  `raw_date` date NOT NULL,
  `raw_remark` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `raw_materials`
--

INSERT INTO `raw_materials` (`id`, `raw_name`, `raw_quantity`, `raw_description`, `raw_materialcode`, `raw_spec`, `raw_materialunit`, `raw_value`, `raw_referncenum`, `raw_date`, `raw_remark`) VALUES
(15, 'Carbon', '23456', 'with sample', 'URM10', 'spec', 'KG', '234554', 'RE67', '2022-10-06', 'Remark'),
(16, 'PE Wax', '678', 'With sample', 'URM6', 'spec', 'KG', '7000', 'REF78', '2022-10-06', 'Remark'),
(17, 'Steric acid', '67', 'with sample', 'URM5', 'spec', 'PCs', '5600', 'ERT56', '2022-10-06', 'Remark'),
(18, 'stablizer', '34', 'with sample', 'URM3', 'spec', 'PC', '3455', 'ER5', '2022-10-06', 'Remark'),
(19, 'Calcium Carbonate', '350', 'With sample', 'URM2', 'spec', 'KG', '3000000', 'RE4TY', '2022-10-06', 'Remark'),
(20, 'CPE 135', '56', 'with sample', 'URM4', 'spec', 'Pcs', '3457', 'REF455', '2022-10-06', 'Remark'),
(21, 'PVC rasin', '100', 'with sample', 'URM1', 'specification', 'pcs', '10000', 'REF34', '2022-10-10', 'Remark'),
(22, 'PVC', '250', 'with sample', 'SRN1', 'spec', 'pcs', '8625000', '43WE43TR', '2022-10-06', 'Remark');

-- --------------------------------------------------------

--
-- Table structure for table `summery`
--

CREATE TABLE `summery` (
  `id` int(11) NOT NULL,
  `material_id` text NOT NULL,
  `material_type` text NOT NULL,
  `summery_date` date NOT NULL,
  `stockat_hand` text NOT NULL,
  `stock_recieved` text NOT NULL,
  `stock_issued` text NOT NULL,
  `department_issued` text NOT NULL,
  `stockat_end` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `summery`
--

INSERT INTO `summery` (`id`, `material_id`, `material_type`, `summery_date`, `stockat_hand`, `stock_recieved`, `stock_issued`, `department_issued`, `stockat_end`) VALUES
(1, '6', 'RAW', '2022-09-05', '24', '20', '', '', ''),
(2, '6', 'RAW', '2022-09-05', '30', '', '10', 'sales', ''),
(3, '6', 'RAW', '2022-09-05', '30', '', '10', 'sales', '20'),
(4, '3', 'RAW', '2022-09-05', '35', '', '10', 'sales', '25'),
(5, '3', 'RAW', '2022-09-05', '35', '', '10', 'sales', '25'),
(6, '5', 'FIN', '2022-09-05', '25', '', '10', 'sales', '15'),
(7, '6', 'FIN', '2022-09-05', '3', '20', '', '', '23'),
(8, '7', 'FIN', '2022-09-05', '3', '20', '', '', '23'),
(9, '4', 'ACCS', '2022-09-05', '0', '20', '', '', '20'),
(10, '4', 'ACCS', '2022-09-16', '20', '20', '', '', '40');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accs_materials`
--
ALTER TABLE `accs_materials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `finished_goods`
--
ALTER TABLE `finished_goods`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `material_request`
--
ALTER TABLE `material_request`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `new_materials`
--
ALTER TABLE `new_materials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `purcase_requestform`
--
ALTER TABLE `purcase_requestform`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `raw_materials`
--
ALTER TABLE `raw_materials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `summery`
--
ALTER TABLE `summery`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accs_materials`
--
ALTER TABLE `accs_materials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `finished_goods`
--
ALTER TABLE `finished_goods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `material_request`
--
ALTER TABLE `material_request`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `new_materials`
--
ALTER TABLE `new_materials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `purcase_requestform`
--
ALTER TABLE `purcase_requestform`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `raw_materials`
--
ALTER TABLE `raw_materials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `summery`
--
ALTER TABLE `summery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
