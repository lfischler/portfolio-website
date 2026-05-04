# Image Guide

## Uploading images to Cloudinary

All images are hosted on Cloudinary under the account `diwlxq34b`.

When uploading, the folder you choose in the Cloudinary Media Library becomes part of the image URL. Always upload into the correct folder:

- **Project images** → upload into `portfolio/images/`
- **Sidebar drawings** → upload into `portfolio/images/drawings/`

Make sure your Cloudinary upload preset has:
- Use filename as public ID: yes
- Unique filename: no

This ensures the image URL matches the filename with no random suffix added.

Once uploaded, reference images in project markdown frontmatter and body content using the local-style path as normal:

```
image: "/images/my-image.jpg"
```

or in markdown body:

```
![caption text](/images/my-image.jpg)
```

Cloudinary URLs are constructed automatically at build time.

## Adding a new sidebar drawing

1. Draw something
2. Upload the image to Cloudinary into `portfolio/images/drawings/`
3. Open `src/_data/drawings.js`
4. Add the filename to the `files` array:

```js
const files = [
  "bike-vie.jpg",
  "graham-vie.jpg",
  "makers-vie.jpg",
  "me-vie.jpg",
  "phones-vie.jpg",
  "suits-vie.jpg",
  "your-new-drawing.jpg"  // add here
];
```

5. Commit and push — the new drawing will join the rotation automatically.

## Cloudinary URL structure

For reference, the full Cloudinary URL pattern is:

```
https://res.cloudinary.com/diwlxq34b/image/upload/[transformations]/portfolio/images/[filename]
```

Transformations used on this site:
- `f_auto` — serves avif, webp, or jpeg depending on browser support
- `q_auto` — automatic quality optimisation
- `w_600` — resize to 600px wide (featured tiles)
- `w_800` — resize to 800px wide (default)
- `w_1200` — resize to 1200px wide (large body images)