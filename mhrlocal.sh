#!/bin/sh
$(dirname $0)/mhrlocal.js | elinks -dump | grep -v p=
