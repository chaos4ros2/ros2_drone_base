---
id: environmental_construction
title: 環境構築
---

## Fast-RTPS-Genのインストール

1. SDKMANをインストールする：

```
$ curl -s "https://get.sdkman.io" | bash
$ source "$HOME/.sdkman/bin/sdkman-init.sh"
$ sdk version
```

2. gradleをインストールする：

```
$ sdk install gradle 6.8.3
```
※ 1 : gradle 6系しか動作しない   
※ 2 : gradle -vでjavaのエラーが表示されたら以下のコマンドでインストールしてくだい
```
$ sudo apt install default-jdk
```  

## 追加モジュールのインストール

```
$ sudo apt install python3-colcon-common-extensions
$ sudo apt install ros-foxy-eigen3-cmake-module
$ sudo pip3 install -U empy pyros-genmsg setuptools
```

## ROS2ワークスペースの作成

```
$ mkdir -p ~/px4_ros_com_ros2/src
```

## px4_ros_comとpx4_msgsのビルド

1. 関係ソードコードをgit cloneする：

```
$ git clone https://github.com/PX4/px4_ros_com.git ~/px4_ros_com_ros2/src/px4_ros_com
$ git clone https://github.com/PX4/px4_msgs.git ~/px4_ros_com_ros2/src/px4_msgs
```

2. スクリプトを実行してworkspaceをビルドする：

```
$ cd ~/px4_ros_com_ros2/src/px4_ros_com/scripts
$ source build_ros2_workspace.bash
```

## ファームウェアのビルド

1. PX4-Autopilotをgit cloneする：

```
$ git clone https://github.com/PX4/PX4-Autopilot.git
```

2. スクリプトを実行して依存パッケージをインストールする：

```
$ bash ./PX4-Autopilot/Tools/setup/ubuntu.sh 
```
#### シミュレーションを使う場合

```
$ make px4_sitl_rtps gazebo
```

#### シミュレーションを使う場合、新しいターミナルでデモを試すことができる

```
// terminal 1
$ source ~/px4_ros_com_ros2/install/setup.bash
$ micrortps_agent -t UDP

// terminal 2
$ source ~/px4_ros_com_ros2/install/setup.bash
$ ros2 launch px4_ros_com sensor_combined_listener.launch.py
```

#### フライトコントローラーにアップする場合

3. フライトコントローラーに合うファームウェアをビルドする：

```
$ cd PX4-Autopilot
$ make px4_fmu-v5_rtps
```
※ 3 : ROS2を使用するには`_rtps`バージョンのファームウェアを使う必要がある

4. フライトコントローラーをPCに接続し、以下のコマンドでファームウェアをアップロードする：

```
$ make px4_fmu-v5_rtps upload
```

以下のメッセージが表示されたらアップロード完了

```
Erase  : [====================] 100.0%
Program: [====================] 100.0%
Verify : [====================] 100.0%
Rebooting. Elapsed Time 82.763
```



