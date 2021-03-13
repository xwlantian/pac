function FindProxyForURL(url, host) {
  if (isPlainHostName(host)) {
    return "DIRECT";
  } else if (shExpMatch(host, "*.qq.com")){
    return "PROXY 47.117.122.77:3128; DIRECT";
  }
  return "DIRECT";
}
