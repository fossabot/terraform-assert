# Terraform Assert
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fcloudcommons%2Fterraform-assert.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fcloudcommons%2Fterraform-assert?ref=badge_shield)


The aim of this assert library is to provide an easy way to assert terraform plans.

Any terraform plan created with terraform, in JSON format, can be used as input for assertion.

## How to use

### Generating a terraform plan in JSON format

This library expects a terraform plan in JSON format, as described in the [terraform documentation](https://www.terraform.io/docs/internals/json-format.html).

The library supports the following plan format_version:

* 0.1

### Asserting JSON terraform plans

This example assumes you are using Mocha and Assert

```bash
npm install --save-dev mocha assert
```

To obtain a terraform plan in JSON format, assuming you have a valid terraform project and has been initialised:

```bash
terraform plan -out=plan.tfplan
terraform show -json plan.tfplan > plan.json
```

Then use plan.json as input for the assert library. This example assumes plan.json has been copied to the same folder :

```node
// test.js
const assert = require('assert');
const terraformAssert = require('@cloudcommons/terraform-assert');
const planJson = require('plan'); // Assuming plan.json has been copied to the same folder as test.js
const plan = terraformAssert(planJson);


describe("My terraform plan test", () => {
    describe("Basic tests", () => {
        it("Terraform version is correct", () => {
            plan.terraformVersion.is("0.12.23");
        });
    });
});

```

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fcloudcommons%2Fterraform-assert.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fcloudcommons%2Fterraform-assert?ref=badge_large)
