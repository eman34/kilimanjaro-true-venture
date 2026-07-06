import { config, collection, fields } from "@keystatic/core";

/* Keystatic CMS config. Each collection here becomes an editing screen at
   /keystatic; entries are stored as YAML files under content/ and read by
   the site through lib/content.ts. The schemas mirror the TypeScript
   interfaces in lib/constants.ts — keep them in sync. */

export default config({
  storage: { kind: "local" },
  ui: {
    brand: { name: "Kilimanjaro True Venture" },
  },
  collections: {
    safaris: collection({
      label: "Safari packages",
      slugField: "name",
      path: "content/safaris/*",
      format: { data: "yaml" },
      schema: {
        name: fields.slug({
          name: {
            label: "Package name",
            description: "e.g. Elephant & Crater Discovery",
          },
        }),
        order: fields.integer({
          label: "Display order",
          description: "Lower numbers appear first on the safaris page",
          defaultValue: 1,
          validation: { isRequired: true },
        }),
        image: fields.text({
          label: "Image path",
          description: "e.g. /images/safari-wildebeest-herd.jpg",
        }),
        days: fields.integer({
          label: "Days",
          validation: { isRequired: true, min: 1 },
        }),
        priceFrom: fields.text({
          label: "Price from",
          description: "Per person, e.g. $1,850",
        }),
        parks: fields.array(fields.text({ label: "Park" }), {
          label: "Parks visited",
          itemLabel: (props) => props.value,
        }),
        summary: fields.text({
          label: "Summary",
          multiline: true,
        }),
        goodFor: fields.text({
          label: "Good for (optional)",
          description: "e.g. Couples, solo travelers and photographers",
        }),
        includes: fields.array(fields.text({ label: "Item" }), {
          label: "Included",
          itemLabel: (props) => props.value,
        }),
        excludes: fields.array(fields.text({ label: "Item" }), {
          label: "Not included",
          itemLabel: (props) => props.value,
        }),
        detailedItinerary: fields.array(
          fields.object({
            day: fields.integer({
              label: "Day number",
              validation: { isRequired: true, min: 1 },
            }),
            title: fields.text({ label: "Title" }),
            park: fields.text({ label: "Park" }),
            description: fields.text({ label: "Description", multiline: true }),
          }),
          {
            label: "Day by day (optional — page shows a placeholder if empty)",
            itemLabel: (props) => props.fields.title.value,
          }
        ),
      },
    }),
  },
});
