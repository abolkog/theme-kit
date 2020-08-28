# Theme-Kit

A NoeJS CLI Wrapper around [Shopify ThemeKit](https://shopify.github.io/themekit/)

> Currently Working with bare liquid themes

<img width="891" alt="Screen Shot 2020-08-28 at 4 42 45 pm" src="https://user-images.githubusercontent.com/3861725/91530203-0fcc7580-e94e-11ea-9d47-330fe87df765.png">

### Prerequisites

- [Shopify ThemeKit](https://shopify.github.io/-themekit/) installed

## Install

- Install the package globally

```
npm i -g @abolkog/theme-kit
```

## Usage

theme-kit is a cli wrapper around shopify themekit, you can use it to switch theme in your working dir, start themekit watch for development or fetch/download a new theme from shopify

> This wrapper will created a file `.werd` on the root level to store your configutation. Add this file to your `.gitignore`

### Downlaod theme

Navigate to a new folder and use the command `get` to download a theme

```
mkdir my-project && cd my-project
theme-kit get
```

follow the on-screen instruction

### Watch theme

Navigate to your them working and issue the commadn `switch`

> the `config.yml` file must exists in the root folder

```
cd my-theme
theme-kit switch
```

follow the on-screen instruction

### Watch theme

To watch for theme changes and upload the theme to shopify use the command `dev`

> the `config.yml` file must exists in the root folder

```
mkdir my-project && cd my-project
theme-kit dev
```

follow the on-screen instruction

## Authors

- **Khalid Elshafie** - _Initial work_ - [abolkog](https://github.com/abolkog)

See also the list of [contributors](https://github.com/abolkog/theme-kit/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
