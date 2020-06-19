---
layout: data-standard
title: Identify the nations of the UK that data applies to
type: Identifier
status: Proposal
standard: ISO 3166-2:GB
description: Use the ISO 3166-2:GB standard to identify the nations of the UK that data applies to
---

## Who this is for

## Why to use use this identifier

This identifier enables anyone creating datasets to accurately and consistently link data to a constituent part of the United Kingdom. It makes it easier for anyone using the data to join it with other datasets and and map it to a known geographical extent.

## How to use this identifier

You should use 2-letter ISO 3166-1 code (GB for the United Kingdom) along the extended ISO 3166-2 codes:

| Code | Area |
| -----  | ------- |
| `GB-ENG` | England |
| `GB-NIR` | Northern Ireland |
| `GB-SCT` | Scotland |
| `GB-WLS` or GB-CYM | Wales |
| `GB-EAW` | England and Wales |
| `GB-GBN` | Great Britain |
| `GB-UKM` | United Kingdom |

This identifier can be used at to to identify that a row in a dataset relates to a specific area, or at the level of the overall dataset.

**Suggested field name:** iso3166-2


## When to use this identifier

When data relates to a specific constituent part of the UK. For example, data published by Citizens Advice Scotland may only apply to Scotland and should be identified as `GB-SCT`.

---

### Status of this identifier

This is a **proposal**, it was suggested as part of the Catalyst data infrastructure project

### Examples in the wild

* There are no known examples. If you know of any, please suggest one [here](#)

### References and links

* [Cabinet Office guidance on using consistent country codes](https://www.gov.uk/government/publications/open-standards-for-government/country-codes)
* [Wikipedia article on ISO 3166-2:GB](https://en.wikipedia.org/wiki/ISO_3166-2:GB)
* [ISO 3166 standard](https://www.iso.org/standard/63545.html)
