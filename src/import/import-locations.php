<?php
/**
 * @package CSE_Import
 * @version 1.0
 */

/*
Converts region (county, country) and town data from a CSV file to a JSON file.

Author: Matt Doyle
Version: 1.0
Author URI: https://www.elated.com/
*/

// Import/export file name
$csv_file_name = "./Towns_List.csv";
$json_file_name = "./locations.json";

// CSV field names
define('TOWN', 0);
define('COUNTY', 1);
define('COUNTRY', 2);

// Arrays to hold data while importing
$towns = [];
$counties = [];
$countries = [];

// Current IDs
$maxTownId = 0;
$maxCountyId = 0;
$maxCountryId = 0;

// Import the CSV
echo "Importing data from '$csv_file_name'...\n";
	
if (( $handle = fopen( $csv_file_name, "r" )) === false ) {
  echo "Error opening CSV file.\n";
  exit;
}

while (( $data = fgetcsv( $handle )) !== false ) {
  if ( $data[TOWN] == "Town" ) continue;  // Skip the header
  
  echo 'Importing "' . $data[TOWN] . "\"\n";

  if ( array_key_exists($data[COUNTRY], $countries) ) {
    $countryId = $countries[$data[COUNTRY]];
  } else {
    $countryId = ++$maxCountryId;
    $countries[$data[COUNTRY]] = $countryId;
  }

  if ( array_key_exists($data[COUNTY], $counties) ) {
    $countyId = $counties[$data[COUNTY]][0];
  } else {
    $countyId = ++$maxCountyId;
    $counties[$data[COUNTY]] = [$countyId, $countryId];
  }

  $towns[++$maxTownId] = [$data[TOWN], $countyId];
}

fclose($handle);

// Data imported into memory. Now output JSON data.
echo "Exporting to JSON file '$json_file_name'...\n";
	
if (( $handle = fopen( $json_file_name, "w" )) === false ) {
  echo "Error opening JSON file.\n";
  exit;
}

$countries_keyed = [];

foreach ($countries as $name => $id) {
  $countries_keyed[] = array('id' => $id, 'name' => $name);
}

$counties_keyed = [];

foreach ($counties as $name => $values) {
  $counties_keyed[] = array('id' => $values[0], 'countryId' => $values[1], 'name' => $name);
}

$towns_keyed = [];

foreach ($towns as $id => $values) {
  $towns_keyed[] = array('id' => $id, 'countyId' => $values[1], 'name' => $values[0]);
}

$output_data = ["countries" => $countries_keyed, "counties" => $counties_keyed, "towns" => $towns_keyed];
fwrite($handle, json_encode($output_data, JSON_PRETTY_PRINT));
fclose($handle);

echo "Export complete.\n";

?>