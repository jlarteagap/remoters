/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  mutation newJob($input: JobInput) {\n    newJob(input: $input) {\n      location {\n        country {\n          name\n        }\n        city {\n          name\n        }\n      }\n      active\n      category\n      company {\n        name\n      }\n      remote\n      username {\n        email\n      }\n      slug\n      link\n      content {\n        currency\n        description\n        salary\n        title\n        contract\n      }\n    }\n  }\n": types.NewJobDocument,
    "\n  mutation register($input: RegisterInput) {\n    register(input: $input) {\n      id\n      name\n      lastname\n      email\n      password\n      role\n      token\n    }\n  }\n": types.RegisterDocument,
    "\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      id\n      name\n      lastname\n      email\n      password\n      role\n      token\n    }\n  }\n": types.LoginDocument,
    "\n  mutation company($input: CompanyInput) {\n    company(input: $input) {\n      id\n      name\n      site\n      description\n      logo\n      username\n    }\n  }\n": types.CompanyDocument,
    "\n  mutation UpdateJob($input: JobInput) {\n    updateJob(input: $input) {\n      active\n      category\n      company {\n        name\n      }\n      id\n      link\n      remote\n      username {\n        email\n      }\n      slug\n      content {\n        contract\n        currency\n        description\n        salary\n        title\n      }\n      location {\n        country {\n          name\n        }\n        city {\n          name\n        }\n      }\n      updatedAt\n      deletedAt\n    }\n  }\n": types.UpdateJobDocument,
    "\n  mutation ChangeActiveJobs($input: JobInput) {\n    changeActiveJobs(input: $input) {\n      active\n      category\n      company {\n        name\n      }\n      id\n      link\n      remote\n      username {\n        email\n      }\n      slug\n      content {\n        contract\n        currency\n        description\n        salary\n        title\n      }\n      location {\n        country {\n          name\n        }\n        city {\n          name\n        }\n      }\n      updatedAt\n      deletedAt\n    }\n  }\n": types.ChangeActiveJobsDocument,
    "\n  mutation deleteJobs($jobId: ID) {\n    deleteJobs(jobId: $jobId)\n  }\n": types.DeleteJobsDocument,
    "\n  mutation deleteCompany($companyId: ID) {\n    deleteCompany(companyId: $companyId)\n  }\n": types.DeleteCompanyDocument,
    "\n  mutation UpdateCompany($input: CompanyInput) {\n    updateCompany(input: $input) {\n      id\n      name\n      site\n      description\n      logo\n      createdAt\n      updatedAt\n      username\n      phone\n      activity\n    }\n  }\n": types.UpdateCompanyDocument,
    "\n  query getJobs(\n    $username: String\n    $category: String\n    $limit: Int\n    $offset: Int\n    $active: Boolean\n  ) {\n    getJobs(\n      username: $username\n      category: $category\n      limit: $limit\n      offset: $offset\n      active: $active\n    ) {\n      id\n      active\n      category\n      company {\n        name\n      }\n      link\n      remote\n      slug\n      content {\n        currency\n        description\n        salary\n        tags\n        title\n        contract\n      }\n      location {\n        country {\n          name\n        }\n        city {\n          name\n        }\n      }\n      createdAt\n      deletedAt\n      updatedAt\n      city\n      companySimple\n      type\n      salary\n      position\n      money\n      country\n    }\n    totalJobs\n    totalActiveJobs\n  }\n": types.GetJobsDocument,
    "\n  query getJob($id: ID) {\n    getJob(ID: $id) {\n      id\n      active\n      category\n      company {\n        name\n      }\n      link\n      remote\n      username {\n        email\n      }\n      slug\n      content {\n        currency\n        description\n        salary\n        title\n        contract\n      }\n      location {\n        country {\n          name\n        }\n        city {\n          name\n        }\n      }\n      city\n      companySimple\n      country\n      money\n      position\n      salary\n      type\n      updatedAt\n      deletedAt\n    }\n  }\n": types.GetJobDocument,
    "\n  query getPost($slug: String) {\n    getPost(slug: $slug) {\n      id\n      active\n      category\n      company {\n        name\n      }\n      link\n      remote\n      username {\n        email\n      }\n      slug\n      content {\n        currency\n        description\n        salary\n        title\n        contract\n      }\n      location {\n        country {\n          name\n        }\n        city {\n          name\n        }\n      }\n      city\n      companySimple\n      country\n      money\n      position\n      salary\n      type\n      updatedAt\n      deletedAt\n    }\n  }\n": types.GetPostDocument,
    "\n  query allCompanies($username: String, $limit: Int, $offset: Int) {\n    allCompanies(username: $username, limit: $limit, offset: $offset) {\n      id\n      name\n      site\n      description\n      logo\n      createdAt\n      activity\n      phone\n      username\n    }\n  }\n": types.AllCompaniesDocument,
    "\n  query getCompany($id: ID) {\n    getCompany(ID: $id) {\n      id\n      name\n      site\n      description\n      logo\n      createdAt\n      activity\n      phone\n      username\n    }\n  }\n": types.GetCompanyDocument,
    "\n  query allUbication {\n    allUbication {\n      name\n      value\n      cities {\n        name\n        value\n        slug\n      }\n    }\n  }\n": types.AllUbicationDocument,
    "\n  query allCategories {\n    allCategories {\n      name\n      value\n      slug\n    }\n  }\n": types.AllCategoriesDocument,
    "\n  query getCategory($slug: String) {\n    getCategory(slug: $slug) {\n      name\n      value\n      slug\n    }\n  }\n": types.GetCategoryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation newJob($input: JobInput) {\n    newJob(input: $input) {\n      location {\n        country {\n          name\n        }\n        city {\n          name\n        }\n      }\n      active\n      category\n      company {\n        name\n      }\n      remote\n      username {\n        email\n      }\n      slug\n      link\n      content {\n        currency\n        description\n        salary\n        title\n        contract\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation newJob($input: JobInput) {\n    newJob(input: $input) {\n      location {\n        country {\n          name\n        }\n        city {\n          name\n        }\n      }\n      active\n      category\n      company {\n        name\n      }\n      remote\n      username {\n        email\n      }\n      slug\n      link\n      content {\n        currency\n        description\n        salary\n        title\n        contract\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation register($input: RegisterInput) {\n    register(input: $input) {\n      id\n      name\n      lastname\n      email\n      password\n      role\n      token\n    }\n  }\n"): (typeof documents)["\n  mutation register($input: RegisterInput) {\n    register(input: $input) {\n      id\n      name\n      lastname\n      email\n      password\n      role\n      token\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      id\n      name\n      lastname\n      email\n      password\n      role\n      token\n    }\n  }\n"): (typeof documents)["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      id\n      name\n      lastname\n      email\n      password\n      role\n      token\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation company($input: CompanyInput) {\n    company(input: $input) {\n      id\n      name\n      site\n      description\n      logo\n      username\n    }\n  }\n"): (typeof documents)["\n  mutation company($input: CompanyInput) {\n    company(input: $input) {\n      id\n      name\n      site\n      description\n      logo\n      username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateJob($input: JobInput) {\n    updateJob(input: $input) {\n      active\n      category\n      company {\n        name\n      }\n      id\n      link\n      remote\n      username {\n        email\n      }\n      slug\n      content {\n        contract\n        currency\n        description\n        salary\n        title\n      }\n      location {\n        country {\n          name\n        }\n        city {\n          name\n        }\n      }\n      updatedAt\n      deletedAt\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateJob($input: JobInput) {\n    updateJob(input: $input) {\n      active\n      category\n      company {\n        name\n      }\n      id\n      link\n      remote\n      username {\n        email\n      }\n      slug\n      content {\n        contract\n        currency\n        description\n        salary\n        title\n      }\n      location {\n        country {\n          name\n        }\n        city {\n          name\n        }\n      }\n      updatedAt\n      deletedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ChangeActiveJobs($input: JobInput) {\n    changeActiveJobs(input: $input) {\n      active\n      category\n      company {\n        name\n      }\n      id\n      link\n      remote\n      username {\n        email\n      }\n      slug\n      content {\n        contract\n        currency\n        description\n        salary\n        title\n      }\n      location {\n        country {\n          name\n        }\n        city {\n          name\n        }\n      }\n      updatedAt\n      deletedAt\n    }\n  }\n"): (typeof documents)["\n  mutation ChangeActiveJobs($input: JobInput) {\n    changeActiveJobs(input: $input) {\n      active\n      category\n      company {\n        name\n      }\n      id\n      link\n      remote\n      username {\n        email\n      }\n      slug\n      content {\n        contract\n        currency\n        description\n        salary\n        title\n      }\n      location {\n        country {\n          name\n        }\n        city {\n          name\n        }\n      }\n      updatedAt\n      deletedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteJobs($jobId: ID) {\n    deleteJobs(jobId: $jobId)\n  }\n"): (typeof documents)["\n  mutation deleteJobs($jobId: ID) {\n    deleteJobs(jobId: $jobId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteCompany($companyId: ID) {\n    deleteCompany(companyId: $companyId)\n  }\n"): (typeof documents)["\n  mutation deleteCompany($companyId: ID) {\n    deleteCompany(companyId: $companyId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateCompany($input: CompanyInput) {\n    updateCompany(input: $input) {\n      id\n      name\n      site\n      description\n      logo\n      createdAt\n      updatedAt\n      username\n      phone\n      activity\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateCompany($input: CompanyInput) {\n    updateCompany(input: $input) {\n      id\n      name\n      site\n      description\n      logo\n      createdAt\n      updatedAt\n      username\n      phone\n      activity\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getJobs(\n    $username: String\n    $category: String\n    $limit: Int\n    $offset: Int\n    $active: Boolean\n  ) {\n    getJobs(\n      username: $username\n      category: $category\n      limit: $limit\n      offset: $offset\n      active: $active\n    ) {\n      id\n      active\n      category\n      company {\n        name\n      }\n      link\n      remote\n      slug\n      content {\n        currency\n        description\n        salary\n        tags\n        title\n        contract\n      }\n      location {\n        country {\n          name\n        }\n        city {\n          name\n        }\n      }\n      createdAt\n      deletedAt\n      updatedAt\n      city\n      companySimple\n      type\n      salary\n      position\n      money\n      country\n    }\n    totalJobs\n    totalActiveJobs\n  }\n"): (typeof documents)["\n  query getJobs(\n    $username: String\n    $category: String\n    $limit: Int\n    $offset: Int\n    $active: Boolean\n  ) {\n    getJobs(\n      username: $username\n      category: $category\n      limit: $limit\n      offset: $offset\n      active: $active\n    ) {\n      id\n      active\n      category\n      company {\n        name\n      }\n      link\n      remote\n      slug\n      content {\n        currency\n        description\n        salary\n        tags\n        title\n        contract\n      }\n      location {\n        country {\n          name\n        }\n        city {\n          name\n        }\n      }\n      createdAt\n      deletedAt\n      updatedAt\n      city\n      companySimple\n      type\n      salary\n      position\n      money\n      country\n    }\n    totalJobs\n    totalActiveJobs\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getJob($id: ID) {\n    getJob(ID: $id) {\n      id\n      active\n      category\n      company {\n        name\n      }\n      link\n      remote\n      username {\n        email\n      }\n      slug\n      content {\n        currency\n        description\n        salary\n        title\n        contract\n      }\n      location {\n        country {\n          name\n        }\n        city {\n          name\n        }\n      }\n      city\n      companySimple\n      country\n      money\n      position\n      salary\n      type\n      updatedAt\n      deletedAt\n    }\n  }\n"): (typeof documents)["\n  query getJob($id: ID) {\n    getJob(ID: $id) {\n      id\n      active\n      category\n      company {\n        name\n      }\n      link\n      remote\n      username {\n        email\n      }\n      slug\n      content {\n        currency\n        description\n        salary\n        title\n        contract\n      }\n      location {\n        country {\n          name\n        }\n        city {\n          name\n        }\n      }\n      city\n      companySimple\n      country\n      money\n      position\n      salary\n      type\n      updatedAt\n      deletedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPost($slug: String) {\n    getPost(slug: $slug) {\n      id\n      active\n      category\n      company {\n        name\n      }\n      link\n      remote\n      username {\n        email\n      }\n      slug\n      content {\n        currency\n        description\n        salary\n        title\n        contract\n      }\n      location {\n        country {\n          name\n        }\n        city {\n          name\n        }\n      }\n      city\n      companySimple\n      country\n      money\n      position\n      salary\n      type\n      updatedAt\n      deletedAt\n    }\n  }\n"): (typeof documents)["\n  query getPost($slug: String) {\n    getPost(slug: $slug) {\n      id\n      active\n      category\n      company {\n        name\n      }\n      link\n      remote\n      username {\n        email\n      }\n      slug\n      content {\n        currency\n        description\n        salary\n        title\n        contract\n      }\n      location {\n        country {\n          name\n        }\n        city {\n          name\n        }\n      }\n      city\n      companySimple\n      country\n      money\n      position\n      salary\n      type\n      updatedAt\n      deletedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query allCompanies($username: String, $limit: Int, $offset: Int) {\n    allCompanies(username: $username, limit: $limit, offset: $offset) {\n      id\n      name\n      site\n      description\n      logo\n      createdAt\n      activity\n      phone\n      username\n    }\n  }\n"): (typeof documents)["\n  query allCompanies($username: String, $limit: Int, $offset: Int) {\n    allCompanies(username: $username, limit: $limit, offset: $offset) {\n      id\n      name\n      site\n      description\n      logo\n      createdAt\n      activity\n      phone\n      username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCompany($id: ID) {\n    getCompany(ID: $id) {\n      id\n      name\n      site\n      description\n      logo\n      createdAt\n      activity\n      phone\n      username\n    }\n  }\n"): (typeof documents)["\n  query getCompany($id: ID) {\n    getCompany(ID: $id) {\n      id\n      name\n      site\n      description\n      logo\n      createdAt\n      activity\n      phone\n      username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query allUbication {\n    allUbication {\n      name\n      value\n      cities {\n        name\n        value\n        slug\n      }\n    }\n  }\n"): (typeof documents)["\n  query allUbication {\n    allUbication {\n      name\n      value\n      cities {\n        name\n        value\n        slug\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query allCategories {\n    allCategories {\n      name\n      value\n      slug\n    }\n  }\n"): (typeof documents)["\n  query allCategories {\n    allCategories {\n      name\n      value\n      slug\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCategory($slug: String) {\n    getCategory(slug: $slug) {\n      name\n      value\n      slug\n    }\n  }\n"): (typeof documents)["\n  query getCategory($slug: String) {\n    getCategory(slug: $slug) {\n      name\n      value\n      slug\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;