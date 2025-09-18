#!/usr/bin/env bash

sudo dnf install -y docker git
sudo systemctl disable --now docker.service docker.socket
sleep 3

sudo sh -eux <<EOF
# Load nf_tables module
modprobe nf_tables
EOF

curl https://get.docker.com/rootless | sudo -u ec2-user sh
sudo loginctl enable-linger $(whoami)

sudo setcap cap_net_bind_service=ep $(which rootlesskit)
sleep 3
systemctl --user restart docker

sudo mkdir -p /usr/local/lib/docker/cli-plugins
sudo curl -SL https://github.com/docker/compose/releases/download/v2.39.3/docker-compose-linux-x86_64 -o /usr/local/lib/docker/cli-plugins/docker-compose
sudo chmod +x /usr/local/lib/docker/cli-plugins/docker-compose

mkdir -p /ec2-user/bin
sudo -u ec2-user wget -O /home/ec2-user/bin/fuse-overlayfs https://github.com/containers/fuse-overlayfs/releases/download/v1.15/fuse-overlayfs-x86_64
sudo -u ec2-user chmod +x /home/ec2-user/bin/fuse-overlayfs
