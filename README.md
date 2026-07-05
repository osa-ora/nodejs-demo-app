# Node.js Demo App

This is a simple Node.js demo application designed to run locally, inside containers using Podman, and on OpenShift using Source-to-Image (S2I).

The app exposes:
- `/` main endpoint
- `/health` health check endpoint returning JSON `{ "status": "ok" }`

It listens on port `8080` and binds to `0.0.0.0` for container compatibility.

---

## Git Clone

Clone the repository for local and Podman deployment.

```
git clone https://github.com/osa-ora/nodejs-demo-app
cd nodejs-demo-app
```

## Local Deployment

Install dependencies:

```
npm install

Run application:

npm start
```
Open in browser:
```
http://localhost:8080
```

---

## Podman Deployment


Build image:
```
podman build -t nodejs-demo-app .
```
Run container:
```
podman run -d --name nodejs-demo-app -p 8080:8080 nodejs-demo-app
```
Check in browser:
```
http://localhost:8080
```
Stop container:
```
podman stop nodejs-demo-app
podman rm nodejs-demo-app
```
---

## OpenShift Deployment (S2I)

Login to OpenShift:

```
oc login <cluster-url>
```

Create application using S2I:

```
oc new-app nodejs:20-ubi9~https://github.com/osa-ora/nodejs-demo-app --name=nodejs-demo-app
```
Expose service:
```
oc expose service nodejs-demo-app
```
Get route:
```
oc get route nodejs-demo-app
```
Open in browser:
```
http://<route-url>
```
---

## Health Check

Endpoint:
```
GET /health
```
Response:

{ "status": "ok" }

---

## Notes

- Ensure Node.js version is 20+ (recommended LTS)
- Application must bind to 0.0.0.0 for container and OpenShift compatibility
- Works with Podman, Docker, and OpenShift S2I builds
