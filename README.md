![](https://cdn.jsdelivr.net/gh/wangningkai/wangningkai/assets/20200726173312.png)

# Gitfolio-online

![GitHub top language](https://img.shields.io/github/languages/top/wangningkai/gitfolio-online.svg?style=popout-square)
![GitHub last commit](https://img.shields.io/github/last-commit/wangningkai/gitfolio-online.svg?style=popout-square)
![GitHub](https://img.shields.io/github/license/wangningkai/gitfolio-online.svg?style=popout-square)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![visitors](https://visitor-badge.laobi.icu/badge?page_id=WangNingkai.gitfolio-online)

> **[中文 README](./README_CN.md)**

## Introduction

> Personal Website For Every Github User

Gitfolio will help you get started with a portfolio website where you could showcase your work.

Check out this [live demo](https://gitfolio-online.vercel.app/user/JasonlovesDoggo) to see gitfolio in action.

## Features

- Easy display your github info
- support multiple themes
- Customizable

## Getting Started

Copy paste this , and that's it. Simple!

Change the `username` to your GitHub's username.

```
https://gitfolio-online.vercel.app/user/{username}?theme={theme}&includeFork={includeFork}&cache_seconds={cache_seconds}
https://gitfolio-online.vercel.app/u/{username}?theme={theme}&includeFork={includeFork}&cache_seconds={cache_seconds}
```

#### Themes

Use `?theme=THEME_NAME` parameter like so :-

```
https://gitfolio-online.vercel.app/u/{username}?theme=dark/light
```

#### Include Forks

Use `?includeFork=true/false` parameter you can select whether to display fork repos

```
https://gitfolio-online.vercel.app/u/{username}?includeFork=true/false
```

#### Params

You can customize the appearance of your page however you want with URL params.

| Option        | type   | description                          | default       |
| ------------- | ------ | ------------------------------------ | ------------- |
| username      | string | set username                         | 'wangningkai' |
| theme         | string | sets inbuilt theme                   | 'dark'        |
| cache_seconds | number | manually set custom cache control    | 1800          |
| includeFork   | bool   | select whether to display fork repos | false         |
| repoNum       | number | display repos number                 | 30            |

## Deploy on your own Vercel instance

Since the GitHub API only allows 5k requests per hour, it is possible that my `https://gitfolio-online.vercel.app/u/wangningkai` could hit the rate limiter. If you host it on your own Vercel server, then you don't have to worry about anything. Click on the deploy button to get started!

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/JasonLovesDoggo/gitfolio-online)
