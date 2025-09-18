#!/usr/bin/env bash

# Install docker
sudo dnf install -y docker git
sudo systemctl disable --now docker.service docker.socket
sleep 3

# Rootless docker dependency
sudo sh -eux <<EOF
# Load nf_tables module
modprobe nf_tables
EOF

# Install rootless docker
curl https://get.docker.com/rootless | sudo -u ec2-user sh

# Don't logout user when exiting terminal
sudo loginctl enable-linger $(ec2-user)

# Enable binding privileged ports
sudo setcap cap_net_bind_service=ep $(/home/ec2-user/bin/rootlesskit)

# Install docker-compose plugin
sudo mkdir -p /usr/local/lib/docker/cli-plugins
sudo curl -SL https://github.com/docker/compose/releases/download/v2.39.3/docker-compose-linux-x86_64 -o /usr/local/lib/docker/cli-plugins/docker-compose
sudo chmod +x /usr/local/lib/docker/cli-plugins/docker-compose

# Install fuse-overlayfs
mkdir -p /ec2-user/bin
sudo -u ec2-user wget -O /home/ec2-user/bin/fuse-overlayfs https://github.com/containers/fuse-overlayfs/releases/download/v1.15/fuse-overlayfs-x86_64
sudo -u ec2-user chmod +x /home/ec2-user/bin/fuse-overlayfs

# Restart docker server
sleep 3
systemctl --user restart docker
