function FindProxyForURL(url, host) {
  if (isPlainHostName(host)) {
    return "DIRECT";
} else if (shExpMatch(host, "wup.imtt.qq.com") 
           || shExpMatch(host, "y.qq.com")
           || shExpMatch(host, "*.y.qq.com")
           || shExpMatch(host, "monitor.music.qq.com")
           || shExpMatch(host, "api.bilibili.com")
           || shExpMatch(host, "www.bilibili.com")
           || shExpMatch(url, "https://www.bilibili.com/bangumi/play/*")
          ){
    return "PROXY 121.5.192.40:2408; DIRECT";
  }
  return "DIRECT";
}
