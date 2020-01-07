# Adonis SaaS Project Manager - Frontend

<div alig="center">
  <img src="/demo.gif" />
</div>

## What is this project?

This is a personal project made with React with the only purpose of <strong>learning ACL's in a Multi-tenant system</strong>. This is only the frontend, the backend can be found [here](https://github.com/igorsouza-dev/adonis-saas-backend). This software is a project management tool that allows users to manage multiple teams, projects and its members.

## Setup

1. Run `yarn` to install the dependencies
2. Run `yarn start` to start the project
3. Access `http://localhost:3000` on your browser

## Business Model

- A user can be in multiple teams and a team can have multiple members
- Users can create teams
- Users can create projects inside teams
- Users can only sign up if they have an invitation to be a member of a team
- Only adminstrator users can invite new members
- Moderator users can create projects
