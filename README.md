# Uta Timeline

## 프로젝트 준비 및 바이너리 생성

### 준비물

자세한 내용은 [타우리 사전 요구 사항](https://tauri.app/ko/v1/guides/getting-started/prerequisites)을 확인해주세요

#### 1. [node.js](https://nodejs.org)

이 프로젝트는 [pnpm](https://pnpm.io/)을 사용해 패키지를 관리합니다. [node.js](https://nodejs.org)를 설치하고 다음 커맨드를 실행해 pnpm을 준비합니다

```sh
corepack enable pnpm
corepack use pnpm@latest
```

#### 2. [Microsoft Visual Studio C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/)

`Microsoft Visual Studio C++ Build Tools`을 설치하기 위해서는 [Visual Studio 2022](https://visualstudio.microsoft.com/visual-cpp-build-tools/)를 이용합니다

![Visual Studio 2022 설치](https://github.com/pekochan069/uta-timeline/assets/97679910/210f40ba-4cec-4f9b-b683-ba4d49ad160b)

#### 3. [rust](https://www.rust-lang.org/) 툴체인

[rustup](https://rustup.rs/)을 설치하고 다음 커맨드를 실행해 러스트 툴체인을 설치합니다

```sh
rustup toolchain install stable-msvc
```

위 커맨드를 실행하면 호스트 플랫폼에 맞는 가장 최신의 안정 버전의 러스트 툴체인을 설치합니다

#### 4. [git](https://git-scm.com)

### 프로젝트 받기

다음 커맨드를 실행해 프로젝트를 받습니다

```sh
git clone https://github.com/pekochan069/uta-timeline.git
cd ./uta-timeline
```

### 프로젝트 빌드

다음 커맨드를 실행해 프로젝트를 컴파일하고, 빌드된 바이너리를 확인합니다

```sh
pnpm tauri build
```

컴파일된 바이너리는 `src-tauri/target/{BUILD_TARGET}/` 폴더에 생성됩니다

기본 타겟이 아닌 다른 타겟을 대상으로 빌드를 하려면 `--target]` 플래그를 사용합니다

```sh
pnpm tauri build --target aarch64-pc-windows-msvc # 64bit ARM Processor for windows
```

자세한 내용은 [타우리 빌드 가이드](https://tauri.app/v1/guides/building/)를 참조하세요

## 로컬 개발 서버

개발을 할 때는 다음 커맨드를 이용해 로컬 개발용 디버그 빌드를 띄워서 사용합니다

```sh
pnpm tauri dev
```
