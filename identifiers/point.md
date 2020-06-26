---
layout: data-standard
title: Publish or exchange point location data
type: Identifier
status: Proposal
standard: org-id
description: Use the World Geodetic System 1984 longitude and latitude to store, publish or exchange point location data
---

## Who this is for

* **Data analysts or GIS officers** publishing data containing location information
* **Database administrators** storing geographical information

## When to use this identifier

When data relates to a specific geographical location. For example, publishing the locations of food banks so they can be placed on a map.

## Why use this identifier

WGS84 covers the whole globe and is widely supported by commercial and open source software.

## How to use this identifier

When publishing tabular data latitude and longitude should be decimal numbers in separate data fields. When storing in a database, you can also choose to store them as a geographic data-type. There are intellectual property issues with using other systems.


### Suggested field names:

```lat``` and ```lon```, or latlon

---

### Examples in the wild

* If you know of any, please suggest one [here](https://github.com/WeTheCatalysts/formats-and-identifiers/issues/6)

### References and links

* [World Geodetic System 1984 (WGS84)](https://earth-info.nga.mil/GandG/update/index.php?dir=wgs84&action=wgs84)
* [Cabinet Office guidance on point locations](https://www.gov.uk/government/publications/open-standards-for-government/exchange-of-location-point)