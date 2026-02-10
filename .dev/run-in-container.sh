#
# Licensed to the Apache Software Foundation (ASF) under one or more
# contributor license agreements.  See the NOTICE file distributed with
# this work for additional information regarding copyright ownership.
# The ASF licenses this file to You under the Apache License, Version 2.0
# (the "License"); you may not use this file except in compliance with
# the License.  You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

# 1.Set env variable.
export JAVA_HOME="/usr/lib/jvm/$(ls /usr/lib/jvm/ | grep java-17-openjdk | awk '{print $NF}')"
export PATH="$JAVA_HOME/bin:$PATH"

# 2.Install bundler.
gem install bundler -v 2.4.22
bundle install

# 3. Create a user matching the host UID/GID, if it doesn't exist
groupadd -g $HOST_GID docuser || true
useradd -u $HOST_UID -g $HOST_GID -m docuser || true
DOC_USER=$(getent passwd "$HOST_UID" | cut -d: -f1)

# We need this link to make sure `python3` points to `python3.11` which contains the prerequisite packages.
ln -s "$(which python3.11)" "/usr/local/bin/python3"

# Build docs
rm -rf .jekyll-cache
su "$DOC_USER" -c "bundle exec jekyll build"
