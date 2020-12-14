#!/bin/bash
set -euxo pipefail

case "$1" in
  "portfolio")
    PORT="8001"
    ;;
  "aklbuses.nz")
    PORT="8002"
    ;;
  "ayro.nz")
    PORT="8003"
    ;;
  *)
    echo "Unknown param: '$1'. Was expecting 'portfolio', 'aklbuses.nz' or 'ayro.nz'."
    exit 1
    ;;
esac

ID=$(docker ps -qf "name=$1")

docker pull ayroblu/"$1":latest

[ ! -z "$ID" ] && docker stop "$ID" && docker rm "$ID"
docker run -p "$PORT":80 --name "$1" -d --restart unless-stopped ayroblu/"$1":latest

