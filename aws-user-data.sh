#!/usr/bin/env bash

sudo dnf config-manager addrepo --from-repofile=https://download.docker.com/linux/fedora/docker-ce.repo
sudo dnf install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

dockerd-rootless-setuptool.sh install
sudo loginctl enable-linger $(whoami)

sudo setcap cap_net_bind_service=ep $(which rootlesskit)
systemctl --user restart docker
