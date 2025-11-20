datacenter = "dc1"
data_dir   = "/nomad/data"

server {
  enabled          = true
  bootstrap_expect = 1
}

client {
  enabled = false
}

