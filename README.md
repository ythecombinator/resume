# My Resumé

> Pretty much of a normal resumé written in plain *markdown* and generated in
other formats like `.pdf`, `.docx` and `.tex`.

## Table of Contents

- [About Me](#about-me)
- [About this Project](#about-this-project)
  - [Motivation](#motivation)
  - [How to Use](#how-to-use)
    - [Getting Started](#getting-started)
    - [Understand the Folders and Files Structure](#understand-the-folders-and-files-structure)
    - [Understand Tasks](#understand-tasks)
    - [Publishing at Github](#publishing-at-github)
  - [Contributing](#contributing)
  - [License](#license)

## About Me

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

## About this Project

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

> **Note:** Some very commom files - or less important - are not described here, such as the `.md` ones - *README*, *LICENSE* *CONTRIBUTING* - and others.

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

#### Understand Tasks

As I mentined before, automation here is done via *npm running*
[package.json](package.json)'s `scripts` section. Each task can be run through:

`npm run <task>`

The tasks are:

|    Task    |                 Description                  |
|------------|----------------------------------------------|
| `pdf:en`   | Generate English *PDF* version               |
| `pdf:pt`   | Generate Portuguese *PDF* version            |
| `pdf`      | Generate all *PDF* versions                  |
| `word:en`  | Generate English *Microsoft Word* version    |
| `word:pt`  | Generate Portuguese *Microsoft Word* version |
| `word`     | Generate all *Microsoft Word* versions       |
| `latex:en` | Generate English *LaTeX* version             |
| `latex:pt` | Generate Portuguese *LaTeX* version          |
| `latex`    | Generate all *LaTeX* versions                |
| `clean`    | Clean all generated versions                 |
| `generate` | Generate all versions                        |

#### Publishing at Github

1. Create a GitHub repo for you CV.

1. Do the steps from [Getting Started](#getting-started) section.

1. Point the cloned repo to the repo you created:

  ```sh
  $ git remote set-url origin git@github.com:username/projectname.git
  ```

1. Change your data.

### Contributing

Contributions are very welcome! If you'd like to contribute, these
[guidelines](CONTRIBUTING.md) may help you.

### License

- The project itself is distributed under the MIT License, available in this repository.
- My resumé - and everything in it - is distributed under a [Creative Commons Attribution 4.0 International](http://creativecommons.org/licenses/by/4.0/).
