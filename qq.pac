function FindProxyForURL(url, host) {
  if (isPlainHostName(host)) {
    return "DIRECT";
} else if (host == "wup.imtt.qq.com"
           || host.endsWith("y.qq.com")
           || host == "monitor.music.qq.com"
           || host == "vd.l.qq.com"
           || host == "p.l.qq.com"
           //|| host.endsWith(".qq.com")
          ){
    return "PROXY 121.5.192.40:2408; DIRECT";
  }
  return "DIRECT";
}
