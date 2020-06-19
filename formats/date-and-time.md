---
layout: data-standard
title: Publish or exchange date or time data
type: Format
status: Proposal
standard: ISO 8601
description: Use the ISO 8601 data standard for date or time data to reduce confusion about different ways of writing dates and times
---

## Who this is for

## Why to use use this format

There are lots of different ways of representing dates and times. This can lead to confusion, for example by 01/02/2020 might mean the first of January 2020 to some people, and the second of January to other people. ISO 8601 is an internationally accepted way to represent dates and times using numbers

## How to use this format

With ISO 8601, date and time values are ordered from the largest to smallest unit of time: year, month (or week), day, hour, minute, second. Like this:

2020-06-13 14:43:30

Dates can be written on their own like this:

2020-06-13

And times can be written like this:

14:43:30

## When to use this format

Use ISO 8601 any time that you need to publish data that contains date or time information. For example, a table of grant recipients that includes a column the grants where awarded should use ISO 8601 format.


### Status of this format

This is a **proposal**, it was suggested as part of the Catalyst data infrastructure project


### Examples in the wild

* There are no known examples. If you know of any, please suggest one [here](#)


### References and links

* [ISO 8601:2004 standard](https://www.iso.org/standard/40874.html)
* [XKCD cartoon about ISO 8601](https://xkcd.com/1179/)
* [Cabinet Office guidance on date and time stamps](https://www.gov.uk/government/publications/open-standards-for-government/date-times-and-time-stamps-standard)