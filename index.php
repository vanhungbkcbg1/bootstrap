<?php
/**
 * Created by PhpStorm.
 * User: 749
 * Date: 2017/06/22
 * Time: 9:03
 */



$list = array (
	array('aaa', 'bbb', 'ccc', 'dddd'),
	array('123', '456', '789'),
	array('"aaa"', '"bbb"')
);

$fp = fopen('file.csv', 'w');

foreach ($list as $fields) {
	fputcsv($fp, $fields);
}

fclose($fp);
?>