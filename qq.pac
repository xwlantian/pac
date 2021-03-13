function FindProxyForURL(url, host) {
  if (isPlainHostName(host)) {
    return "DIRECT";
} else if (shExpMatch(host, "wup.imtt.qq.com") || shExpMatch(host, "y.qq.com")|| shExpMatch(host, "*.y.qq.com")){
    return "PROXY 121.5.192.40:2408; DIRECT";
  }
  return "DIRECT";
}
