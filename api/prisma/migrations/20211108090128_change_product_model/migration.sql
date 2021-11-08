-- AlterTable
ALTER TABLE `Order` MODIFY `fulfilmentType` ENUM('Delivery', 'Pickup');

-- AlterTable
ALTER TABLE `Product` MODIFY `spiceLevel` ENUM('None', 'Mild', 'Medium', 'Hot', 'ExtraHot') DEFAULT 'None';
