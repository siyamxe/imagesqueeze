export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'Is ImageSqueeze really free?',
    answer:
      'Yes. ImageSqueeze is completely free to use. There is no account, no watermark, no daily limit and nothing to install. Open the page, drop your images in and download the compressed results.',
  },
  {
    question: 'Are my images uploaded to a server?',
    answer:
      'No. All compression and conversion happens locally in your browser using the Canvas API and Web Workers. Your images never leave your device, so there is nothing to upload and nothing stored on a server.',
  },
  {
    question: 'Which image formats are supported?',
    answer:
      'You can upload PNG, JPG/JPEG, WebP, GIF (first frame) and BMP files. You can output JPG, PNG or WebP, so you can convert between formats as well as compress.',
  },
  {
    question: 'How much smaller will my images be?',
    answer:
      'It depends on the image and the settings you choose. Photos often shrink by 50–80% at around 80% quality. PNG is a lossless format, so its size may barely change — converting it to WebP or JPG usually gives the biggest savings.',
  },
  {
    question: 'Can I compress multiple images at once?',
    answer:
      'Yes. Drag and drop as many images as you like (up to 25 MB each). You can download each result individually or grab everything at once as a single ZIP file.',
  },
  {
    question: 'Does compressing reduce image quality?',
    answer:
      'Lossy formats such as JPG and WebP trade a little quality for a much smaller file. The quality slider lets you choose the balance, so you can keep images looking sharp while cutting their size. PNG output stays lossless.',
  },
  {
    question: 'Can I convert PNG to JPG or WebP?',
    answer:
      'Yes. Choose the output format before you compress. Converting a large PNG to WebP is one of the easiest ways to make a website image dramatically smaller.',
  },
  {
    question: 'Is there a file size limit?',
    answer:
      'Each file can be up to 25 MB. There is no limit on the number of files, although very large batches depend on your device’s available memory.',
  },
  {
    question: 'Does ImageSqueeze work on mobile?',
    answer:
      'Yes. The site is fully responsive and works in modern mobile browsers. For large batches, a desktop or laptop gives you more memory and a bigger screen.',
  },
  {
    question: 'Do I need to create an account?',
    answer:
      'No. There is no sign-up, no email address and no tracking. Just open the tool and start compressing.',
  },
];
