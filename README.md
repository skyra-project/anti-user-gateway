# @skyra/anti-user-gateway

This is a plugin that can be used in both [klasa]/[settings] (0.5.0-dev) and
[klasa]/[next] (0.6.0-dev).

This plugin works by registering a custom gateway implementing Gateway, which
avoids all I/O operations by making them [NOP]s. However, this plugin comes with
the cost that `User#settings` cannot be used unless you use class fields.

## Contributing

1. Fork it!
1. Create your feature branch: `git checkout -b my-new-feature`
1. Commit your changes: `git commit -am 'Add some feature'`
1. Push to the branch: `git push origin my-new-feature`
1. Submit a pull request!

## Author

**@skyra/anti-user-gateway** © [kyranet][author], released under the
[MIT][license] License.
Authored and maintained by kyranet.

> Github [kyranet][author] - Twitter [@kyranet_][twitter]

[license]: https://github.com/skyra-project/anti-user-gateway/blob/master/LICENSE.md
[author]: https://github.com/kyranet
[twitter]: https://twitter.com/kyranet_

[klasa]: https://github.com/dirigeants/klasa
[settings]: https://github.com/dirigeants/klasa/tree/settings
[next]: https://github.com/dirigeants/klasa/tree/master
[NOP]: https://en.wikipedia.org/wiki/NOP_(code)
