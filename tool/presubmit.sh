#!/bin/bash
set -e
DIR=$(dirname "${BASH_SOURCE[0]}")
$DIR/build_sdk.sh
$DIR/test.sh
$DIR/browser_test.sh
$DIR/analyze.sh
$DIR/format.sh
if [[ "$TRAVIS" != true ]]; then
  $DIR/node_test.sh
fi
echo "*** Presubmit finished"
