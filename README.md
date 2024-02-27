# Uta Timeline

## 프로젝트 준비 및 바이너리 생성

### 준비물

#### 1. [node.js](https://nodejs.org)

이 프로젝트는 [pnpm](https://pnpm.io/)을 사용해 패키지를 관리합니다. [node.js](https://nodejs.org)를 설치하고 다음 커맨드를 실행해 pnpm을 준비합니다

```sh
corepack enable pnpm
corepack use pnpm@latest
```

#### 2. [Conda](https://conda.io/projects/conda/latest/index.html)

이 프로젝트는 Conda(**mamba**)를 이용해 파이썬 패키지를 관리합니다

Conda를 설치하는 방법은 [Miniforge](https://github.com/conda-forge/miniforge)를 사용해 설치하는 것을 추천합니다

**Miniforge** 이외에도 [Anaconda](https://www.anaconda.com/), 혹은 [Miniconda](https://docs.anaconda.com/free/miniconda/index.html)를 이용해 **Conda**를 설치할 수 있습니다

#### 3. [git](https://git-scm.com)

### 프로젝트 받기

다음 커맨드를 실행해 프로젝트를 받습니다

```sh
git clone https://github.com/pekochan069/uta-timeline.git
cd ./uta-timeline
```

### 프로젝트 환경 설정

#### Node.js 환경 설정

다음 커맨드를 실행해 정확한 Node.js 실행 환경을 구성합니다

```sh
pnpm install
```

#### 파이썬 환경 설정

다음 커맨드를 실행해 정확한 파이썬 실행 환경을 구성합니다

```sh
pnpm run init
```

혹은 직접 **Conda**(**Mamba**) 명령어를 실행해 파이썬 실행 환경을 구성할 수도 있습니다

```sh
conda env create -f environment-windows.yml # windows
```

**Mamba**를 사용한다면 **Conda** 대신 **Mamba**를 사용할 수 있습니다

`package.json` 안과 위 커맨드의 `conda`를 `mamba`로 수정하면 **Conda** 대신 더 빠른 **Mamba**를 사용할 수 있습니다

```diff
package.json
...
- 6 "init:windows": "conda env create -f environment-windows.yml",
+ 6 "init:windows": "mamba env create -f environment-windows.yml",
...
- 9 "dev:windows": "cross-env NODE_ENV=development ENV=development concurrently --kill-others \"pnpm run dev:front\" \"conda run -n uta-timeline python src-py/main.py\"",
+ 9 "dev:windows": "cross-env NODE_ENV=development ENV=development concurrently --kill-others \"pnpm run dev:front\" \"mamba run -n uta-timeline python src-py/main.py\"",
...
- 11 "start:windows": "cross-env NODE_ENV=production pnpm run build&& cross-env ENV=production conda run -n uta-timeline python src-py/main.py",
+ 11 "start:windows": "cross-env NODE_ENV=production pnpm run build&& cross-env ENV=production mamba run -n uta-timeline python src-py/main.py",
...
```

```sh
mamba env create -f environment-windows.yml # windows
```

### 프로젝트 빌드 및 실행

다음 커맨드를 실행해 프로젝트를 빌드하고 실행합니다

```sh
pnpm run start
```

## 로컬 개발 서버

개발을 할 때는 다음 커맨드를 이용해 로컬 개발용 디버그 빌드를 띄워서 사용합니다

```sh
pnpm run dev
```
