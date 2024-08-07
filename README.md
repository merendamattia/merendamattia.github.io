# HOW TO BUILD LOCALLY

Every command should be executed from the **git bash**.

* Download ruby from [here](https://rubyinstaller.org/downloads/).
* Install bundler: 
```
gem install bundler
```

* Install jekyll: 
```
gem install jekyll
```

* Create Gemfile: 
```
echo "source 'https://rubygems.org'" > Gemfile**
echo "gem 'github-pages', group: :jekyll_plugins" >> Gemfile
```

* Install gems: 
```
bundle install
```

* If some gem fails to install, use this: 
```
gem install gem_name -v 'version' --source 'https://rubygems.org/'
```

* Create site: 
```
bundle exec jekyll \_3.3.0\_ new . --force
```

* Revert all changes made to `_config.yml` and `index.md` and other staged files.

* Change the theme in Gemfile
    * Find a line similar to this: `gem "minima", "~> 2.0"`
    * Replace with this: `gem "jekyll-theme-minimal", "~> 0.1.1"`
    * Execute `bundle install`

* Execute Jekyll: 
```
bundle exec jekyll serve
```

* If the port is in use, add `--port port_number`

---

## REFERENCE

This [guide](https://help.github.jp/enterprise/2.11/user/articles/setting-up-your-github-pages-site-locally-with-jekyll/)
