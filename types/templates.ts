import {
  HomepageQueryResult,
  PageNotFoundQueryResult,
  PageQueryResult
} from 'sanity.types'
import { InternalLink } from './link'

/**
 * Homepage template is populated only if the query returns
 * a non-null object; to avoid optional chaining, we explicity
 * define the templates props and wrap the query result with NonNullable
 */
export type HomepageTemplateProps = Omit<
  NonNullable<HomepageQueryResult>,
  'link'
> & {
  link: InternalLink
}

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
