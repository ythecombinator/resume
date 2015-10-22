# My Resumé

> Pretty much of a normal resumé written in plain *markdown* and generated in
other formats like `.pdf`, `.docx` and `.tex`.

## About me

Hey, my name's Matheus :)

If you wanna know more about me, you're probably in the right place! I'd recommend
you reading one of the available markdown versions of my resumé:

- [English](resumes/markdown/en.md)
- [Brazilian Portuguese](resumes/markdown/pt.md)

If you're not confortable with markdown, you can download it in other formats:

### Adobe PDF

- [English](resumes/pdf/en.pdf)
- [Brazilian Portuguese](resumes/pdf/pt.pdf)

### Microsoft Word

- [English](resumes/word/en.docx)
- [Brazilian Portuguese](resumes/word/pt.docx)

### LaTeX

- [English](resumes/latex/en.tex)
- [Brazilian Portuguese](resumes/latex/pt.tex)

## About This Project

### Motivation

When I started doing my CV, I had one requirement: I wanted to write only markdown
and I wanted it to be exported to formats like `.pdf`. As a *node-tooling-addicted*,
I searched for node.js-based tools to help me. I found some node modules which can make it,
like [markdown-pdf](https://github.com/alanshaw/markdown-pdf), but the results werem't
exactly what I expected.

Then I thought about using the famous *Haskell-written* [pandoc](https://github.com/jgm/pandoc) + [npm scripts](https://docs.npmjs.com/misc/scripts) - and a bit of *JS* - for automation.

### How to Use

#### Getting Started

1. Clone this repository:

  ````sh
  $ git clone https://github.com/mabrasil/resume.git
  ```

1. Make sure you have all the dependencies:

  - [Pandoc](http://pandoc.org/installing.html)
  - [Node.js](https://nodejs.org/en/)
  - [del](https://github.com/sindresorhus/del) as a *CLI tool*

1. Go to the project's root:

  ```sh
  $ cd resume
  ```

1. Run the `generate` script:

  ```sh
  $ npm run generate
  ```

#### Understand the Folders and Files Structure

If everything from the [Getting Started](#getting-started) section goes well, you should have this:

```
|-- lib/
|-- resumes/
|   |-- latex/
|   |-- markdown/
|   |-- pdf/
|   |-- word/
|-- .editorconfig
|-- .gitignore
|-- package.json
```

Now let's find out what each one of those files and folders mean.

> Note: Some very commom files - or less important - are not described here, such as the `.md` ones - *README*, *LICENSE* *CONTRIBUTING* - and others.

##### [`resumes/markdown/`](/resumes/markdown/)

Contains the **original** *Markdown* resumés.

##### [`resumes/latex/`](/resumes/images/)

Contains the exported *LaTeX* (`.tex`) resumés.

##### [`resumes/pdf/`](/resumes/pdf/)

Contains the exported *PDF* resumés.

##### [`resumes/word/`](/resumes/word/)

Contains the exported *Microsoft Word* (`.docx`) resumés.

##### [`lib/`](/lib/)

Contains some scripts to make automation easier - like cleaning etc.

##### [`package.json`](package.json)

Contains many metadata relevant to the project - like `npm run` scripts.
