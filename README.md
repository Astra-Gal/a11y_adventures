# Accesibility Adventures

![Screenshot 2021-06-16 at 12 40 10](https://user-images.githubusercontent.com/69347343/122212946-528d1900-cea0-11eb-9fc5-2e718644c9db.png)

![Screenshot 2021-06-16 at 12 40 37](https://user-images.githubusercontent.com/69347343/122212980-5ae55400-cea0-11eb-8d3d-e8425f946f59.png)

This is a work in progress, allowing me to explore some key concepts in accessibility and inclusive design. I am also using this project to refresh my vanilla JavaScript skills after a stretch in framework land.

So far it has....

- a 'skip to...' link that lets keyboard users bypass the (currently decorative) navigation links at the top of the page and skip straight to the main content
- accessible error handling on the form, communicated to screenreaders by aria-live
- communication of dynamic content changes as the mascots are filtered using aria-live and aria-atomic attributes
- alt text on all images (I had fun writing those!)
- native HTML elements wherever possible (for example, inspired by Heydon Pickering, the 'filter by...' buttons are actually secretly radio buttons) to make keyboard navigation easier

## Next Steps

- A user should be able to select a mascot - and then something should happen!
- I would like to continue working my way through the WCAG guidelines, and practising the concepts here
