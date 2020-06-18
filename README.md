# `@skyra/anti-user-gateway`

This is a plugin that can be used in both [klasa]/[settings] (0.5.0-dev) and
[klasa]/[next] (0.6.0-dev).

This plugin works by registering a custom gateway implementing Gateway, which
avoids all I/O operations by making them [NOP]s. However, this plugin comes with
the cost that `User#settings` cannot be used unless you use class fields.

[klasa]: https://github.com/dirigeants/klasa
[settings]: https://github.com/dirigeants/klasa/tree/settings
[next]: https://github.com/dirigeants/klasa/tree/master
[NOP]: https://en.wikipedia.org/wiki/NOP_(code)
