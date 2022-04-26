---
title: workspaces
id: workspace
---
If you start Sonar it comes with a Default Workspace 

When you start Sonar it provides a default workspace. Workspaces are our endpoints in which collections can be managed, more about this under the point Collections.

There can be multiple workspaces on one Sonar server but in alpha state you should use only the default workspace.

To use the workspace it must be added to the project:

```npm install @arso-project/sonar-client```

Afterwards this can be impoted and created via the constructor:

```js
import { Workspace } from "@arsonar/client";
/**
 * Get the URL and access token for 
 * the Sonar instance running in the background. 
 */
const url = process.env.SONAR_URL || 'http://localhost:9191/api/v1/default'
const token = process.env.SONAR_TOKEN
/**
 * Initializing a client 
 */
export const workspace = new Workspace({
  url,
  accessCode: token
});
```

Now you can create, update, open and display collections on the workspace. Furthermore the workspace offers the possibility to manage the login of the client. More about the workspace can be found in the API description: [Workspace](https://sonar-apidocs.dev.arso.xyz/Workspace.html)

How to create collections and so on you can find in the collection guide.