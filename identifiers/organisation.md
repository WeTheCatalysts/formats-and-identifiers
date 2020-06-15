## Identifier — Organisation Identifier

# Identify an organisation

## Why to use use this identifier

This identifier allows anyone create a dataset with data about an organisation to unambiguously and consistently identify the organisation. It makes it easier for anyone using the data to identify where multiple records apply to the same organisation, and to join it to other datasets containing information about those organisations.

## How to use this identifier

You should create an "org-id" for the organisation using the format described in [org-id.guide](http://org-id.guide/about). The identifier consists of two parts:

### 1. The Scheme

The scheme shows which list of codes you have used for the identifier. For identifying non-profit organisations in the UK, this would be something like the Charity Commission register of charities or the Companies House register of companies.

Each scheme has a unique code that identifies it, which includes a two-letter code showing which country it belongs to. The register of charities in England and Wales is identified by `GB-CHC`, while the register of companies is `GB-COH`.

[org-id.guide](http://org-id.guide/) contains a register of schemes used for different organisation types in different countries. Some common schemes used for identifying non-profit organisations in the UK include:

| Scheme code | Scheme name |
| ----------- | ----------- |
| `GB-CHC`    | [Register of charities in England and Wales](http://org-id.guide/list/GB-CHC) |
| `GB-COH`    | [Register of companies](http://org-id.guide/list/GB-COH) |
| `GB-SC`     | [Register of charities in ](http://org-id.guide/list/GB-SC) |
| `GB-NIC`    | [Register of charities in Northern Ireland](http://org-id.guide/list/GB-NIC) |
| `GB-MPR`    | [Mutuals Public Register](http://org-id.guide/list/GB-MPR) | 
| `GB-EDU`    | [Register of Schools (England and Wales)](http://org-id.guide/list/GB-EDU) |

### 2. The identifier

To identify the organisation within the scheme you should use the identifier associated with the organisation. So, if you have used `GB-CHC` - the register of charities in England and Wales - you should use the organisations' charity number as the identifier. If you have used `GB-COH` - the register of companies - you should use the company numbers.

Note that some identifiers may need to be formatted in a particular way. For example, a company number using `GB-COH` needs to have 8 digits, with leading zeroes added as necessary. So `01234567` is correct, rather than `1234567`.

### Combining the two parts

To create an identifier you then combine the two parts. This can be done in a single field using a dash `-`, for example `GB-COH-01234567`. Or you could have separate `id` and `scheme` fields.

| scheme | id       |
| ------ | -------- |
| GB-COH | 01234567 |

org-id.guide also suggests that an object can be created with `id` and `scheme` fields:

```json
{
    "scheme": "GB-COH",
    "id": "01234567"
}
```

### Notes on identifying organisations

Note that some organisations may be identified differently through two different schemes. For example, some charities are also registered companies, and so may have charity and company numbers. And some charities can re-register with the Charity Commission when they change legal form and so have two charity numbers. Where the majority of organisations in your dataset are charities you should prefer the charity number to the company number.

Uses of data containing this identifier should expect that they may need to "normalise" the organisation identifiers. For example, they may need to check each company number to see if it has an associated charity number.

**Suggested field name:** org_id

## When to use this identifier

When data relates to a specific organisation. For example, a list of organisations that are members of a network.

---

### Status of this identifier

This is a **proposal**, it was suggested as part of the Catalyst data infrastructure project

### Examples in the wild

* [360Giving](http://standard.threesixtygiving.org/en/latest/identifiers/#organisation-identifier) recommends Org ID as the preferred format for identifying organisations that have made a received grants, as part of the data standard.
* [IATI](http://reference.iatistandard.org/203/organisation-standard/iati-organisations/iati-organisation/organisation-identifier/) uses org-id to identify organisations that have made or received international aid. The identifiers used by IATI include identifying organisations outside of the UK.
* [Findthatcharity](https://findthatcharity.uk/) allows searching UK charities and retrieving organisation identifiers relating to them.

### References and links

* [Org ID guide](http://org-id.guide/)
* [360Giving blog on importance of organisation identifiers](https://www.threesixtygiving.org/2018/05/14/organisation-identifiers-matter-lessons-healthcare-sector/)