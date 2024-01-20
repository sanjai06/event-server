/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import strapiCloud from "@strapi/plugin-cloud/strapi-admin";
import i18N from "@strapi/plugin-i18n/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import strapiPaypal from "strapi-paypal/strapi-admin";
import generateSchema from "strapi-plugin-generate-schema/strapi-admin";
import importExportEntries from "strapi-plugin-import-export-entries/strapi-admin";
import netlifyDeployments from "strapi-plugin-netlify-deployments/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

renderAdmin(document.getElementById("strapi"), {
  plugins: {
    "strapi-cloud": strapiCloud,
    i18n: i18N,
    "users-permissions": usersPermissions,
    "strapi-paypal": strapiPaypal,
    "generate-schema": generateSchema,
    "import-export-entries": importExportEntries,
    "netlify-deployments": netlifyDeployments,
  },
});
