#!/usr/bin/env bash

sudo dnf install -y docker git
sudo systemctl disable --now docker.service docker.socket

sudo sh -eux <<EOF
# Load nf_tables module
modprobe nf_tables
EOF

curl https://get.docker.com/rootless | sudo -u ec2-user sh
sudo loginctl enable-linger $(whoami)

sudo setcap cap_net_bind_service=ep $(which rootlesskit)
systemctl --user restart docker
