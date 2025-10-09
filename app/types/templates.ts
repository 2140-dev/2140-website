import {
  HomepageQueryResult,
  PageNotFoundQueryResult,
  PageQueryResult
} from 'sanity.types'

/**
 * Homepage template is populated only if the query returns
 * a non-null object; to avoid optional chaining, we explicity
 * define the templates props and wrap the query result with NonNullable
 */
export type HomepageTemplateProps = NonNullable<HomepageQueryResult>

/**
 * Page templates are populated only if the query returns
 * a non-null object; to avoid optional chaining, we explicity
 * define the templates props and wrap the query result with NonNullable
 */
export type PageTemplateProps = NonNullable<PageQueryResult>

/**
 * Not Found template is populated only if the query returns
 * a non-null object; to avoid optional chaining, we explicity
 * define the templates props and wrap the query result with NonNullable
 */
export type NotFoundTemplateProps = NonNullable<PageNotFoundQueryResult>
