# START YOUR CHROME WITHOUT WEB SECURITY

### Please pay attention, disabling web security of your browser may expose you to web attacks (malware, hacks), this library is for developers that KNOW how to manage the security risks

This library allow you to start your chrome browser with web security disabled, to test your applications without the hassle of CORS or other browser restriction.

install the library with:

```
npm i -g nowebsecurity
```

run the script with:

```
nowebsecurity
```

You can skip the prompt by writing the version of chrome that you want to disable:

```
nowebsecurity latest|83/68...
```

## Credits:

- [To this post](https://stackoverflow.com/a/58658101)
- [Chalk](https://github.com/chalk/chalk)
- [Prompts](https://github.com/terkelg/prompts)
