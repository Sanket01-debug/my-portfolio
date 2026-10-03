# Resume download and contact messages

The resume button downloads `public/resume.pdf` as `Sanket-Resume.pdf`.
The PDF is served with the portfolio, so visitors do not need Google Drive
access or approval. Replace this file when updating your resume, then rebuild
and redeploy the portfolio.

## Messages to your Gmail

**Send Message** submits the visitor's name, email, and message through
[FormSubmit's AJAX endpoint](https://formsubmit.co/ajax-documentation) to
`sanketkansal2001@gmail.com`. Visitors stay on the portfolio. No EmailJS
credentials or Gmail password are needed in `.env`.

Before receiving messages, activate the recipient once:

1. Submit a test message through the portfolio running with `npm run dev`
   or from the deployed site. Do not open `index.html` directly as a file.
2. Open Gmail for `sanketkansal2001@gmail.com` and find the FormSubmit
   activation email. Check Spam if it is missing.
3. Click the activation link. This confirms that you own the receiving inbox.
4. Submit another test message and confirm that it arrives. Repeat from the
   deployed site if FormSubmit requests activation for that site.

Use Gmail's Reply action to respond to the visitor. The visitor's address
is sent in `email` and `_replyto`; the recipient is fixed in the endpoint.

The form validates input, prevents duplicate submissions while sending,
checks the service's HTTP and JSON responses, and keeps the visitor's message
if submission fails. A successful response confirms acceptance by the service;
it does not independently verify delivery to the Gmail inbox. An email draft
link is available below the button if the service cannot be reached.

Rebuild and redeploy the portfolio to update the live form. Your existing
Google Analytics setting in `.env` remains unchanged.

References: [FormSubmit activation](https://formsubmit.co/) and
[FormSubmit fields and AJAX](https://formsubmit.co/documentation).
