import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_hero_actions_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_hero_actions_link_style" AS ENUM('solid', 'line', 'gold', 'link');
  CREATE TYPE "public"."enum_pages_blocks_content_layout" AS ENUM('split', 'stacked');
  CREATE TYPE "public"."enum_pages_blocks_media_text_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_card_grid_cards_icon" AS ENUM('infrastructure', 'cloud', 'managed', 'staffing', 'maintenance', 'data', 'security', 'workspace', 'print', 'erp', 'classroom', 'robotics', 'excellence', 'library', 'school', 'university', 'digital', 'csr', 'search', 'plan', 'rocket', 'star', 'users', 'check');
  CREATE TYPE "public"."enum_pages_blocks_card_grid_cards_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_card_grid_source" AS ENUM('manual', 'children', 'services', 'industries', 'education');
  CREATE TYPE "public"."enum_pages_blocks_card_grid_style" AS ENUM('cards', 'photo', 'index');
  CREATE TYPE "public"."enum_pages_blocks_card_grid_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_process_steps_icon" AS ENUM('infrastructure', 'cloud', 'managed', 'staffing', 'maintenance', 'data', 'security', 'workspace', 'print', 'erp', 'classroom', 'robotics', 'excellence', 'library', 'school', 'university', 'digital', 'csr', 'search', 'plan', 'rocket', 'star', 'users', 'check');
  CREATE TYPE "public"."enum_pages_blocks_process_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_cta_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_enquiry_form_aside_cards_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_blocks_enquiry_form_form_type" AS ENUM('enquiry', 'career');
  CREATE TYPE "public"."enum_pages_blocks_insights_feed_feed" AS ENUM('blog', 'news', 'event', 'case-study');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_version_hero_actions_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_version_hero_actions_link_style" AS ENUM('solid', 'line', 'gold', 'link');
  CREATE TYPE "public"."enum__pages_v_blocks_content_layout" AS ENUM('split', 'stacked');
  CREATE TYPE "public"."enum__pages_v_blocks_media_text_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_card_grid_cards_icon" AS ENUM('infrastructure', 'cloud', 'managed', 'staffing', 'maintenance', 'data', 'security', 'workspace', 'print', 'erp', 'classroom', 'robotics', 'excellence', 'library', 'school', 'university', 'digital', 'csr', 'search', 'plan', 'rocket', 'star', 'users', 'check');
  CREATE TYPE "public"."enum__pages_v_blocks_card_grid_cards_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_card_grid_source" AS ENUM('manual', 'children', 'services', 'industries', 'education');
  CREATE TYPE "public"."enum__pages_v_blocks_card_grid_style" AS ENUM('cards', 'photo', 'index');
  CREATE TYPE "public"."enum__pages_v_blocks_card_grid_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_process_steps_icon" AS ENUM('infrastructure', 'cloud', 'managed', 'staffing', 'maintenance', 'data', 'security', 'workspace', 'print', 'erp', 'classroom', 'robotics', 'excellence', 'library', 'school', 'university', 'digital', 'csr', 'search', 'plan', 'rocket', 'star', 'users', 'check');
  CREATE TYPE "public"."enum__pages_v_blocks_process_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_cta_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_enquiry_form_aside_cards_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_blocks_enquiry_form_form_type" AS ENUM('enquiry', 'career');
  CREATE TYPE "public"."enum__pages_v_blocks_insights_feed_feed" AS ENUM('blog', 'news', 'event', 'case-study');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_services_hero_actions_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_services_hero_actions_link_style" AS ENUM('solid', 'line', 'gold', 'link');
  CREATE TYPE "public"."enum_services_blocks_content_layout" AS ENUM('split', 'stacked');
  CREATE TYPE "public"."enum_services_blocks_media_text_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_services_blocks_card_grid_cards_icon" AS ENUM('infrastructure', 'cloud', 'managed', 'staffing', 'maintenance', 'data', 'security', 'workspace', 'print', 'erp', 'classroom', 'robotics', 'excellence', 'library', 'school', 'university', 'digital', 'csr', 'search', 'plan', 'rocket', 'star', 'users', 'check');
  CREATE TYPE "public"."enum_services_blocks_card_grid_cards_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_services_blocks_card_grid_source" AS ENUM('manual', 'children', 'services', 'industries', 'education');
  CREATE TYPE "public"."enum_services_blocks_card_grid_style" AS ENUM('cards', 'photo', 'index');
  CREATE TYPE "public"."enum_services_blocks_card_grid_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_services_blocks_process_steps_icon" AS ENUM('infrastructure', 'cloud', 'managed', 'staffing', 'maintenance', 'data', 'security', 'workspace', 'print', 'erp', 'classroom', 'robotics', 'excellence', 'library', 'school', 'university', 'digital', 'csr', 'search', 'plan', 'rocket', 'star', 'users', 'check');
  CREATE TYPE "public"."enum_services_blocks_process_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_services_blocks_cta_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_services_blocks_enquiry_form_aside_cards_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_services_blocks_enquiry_form_form_type" AS ENUM('enquiry', 'career');
  CREATE TYPE "public"."enum_services_blocks_insights_feed_feed" AS ENUM('blog', 'news', 'event', 'case-study');
  CREATE TYPE "public"."enum_services_icon" AS ENUM('infrastructure', 'cloud', 'managed', 'staffing', 'maintenance', 'data', 'security', 'workspace', 'print', 'erp', 'classroom', 'robotics', 'excellence', 'library', 'school', 'university', 'digital', 'csr', 'search', 'plan', 'rocket', 'star', 'users', 'check');
  CREATE TYPE "public"."enum_services_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__services_v_version_hero_actions_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__services_v_version_hero_actions_link_style" AS ENUM('solid', 'line', 'gold', 'link');
  CREATE TYPE "public"."enum__services_v_blocks_content_layout" AS ENUM('split', 'stacked');
  CREATE TYPE "public"."enum__services_v_blocks_media_text_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__services_v_blocks_card_grid_cards_icon" AS ENUM('infrastructure', 'cloud', 'managed', 'staffing', 'maintenance', 'data', 'security', 'workspace', 'print', 'erp', 'classroom', 'robotics', 'excellence', 'library', 'school', 'university', 'digital', 'csr', 'search', 'plan', 'rocket', 'star', 'users', 'check');
  CREATE TYPE "public"."enum__services_v_blocks_card_grid_cards_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__services_v_blocks_card_grid_source" AS ENUM('manual', 'children', 'services', 'industries', 'education');
  CREATE TYPE "public"."enum__services_v_blocks_card_grid_style" AS ENUM('cards', 'photo', 'index');
  CREATE TYPE "public"."enum__services_v_blocks_card_grid_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__services_v_blocks_process_steps_icon" AS ENUM('infrastructure', 'cloud', 'managed', 'staffing', 'maintenance', 'data', 'security', 'workspace', 'print', 'erp', 'classroom', 'robotics', 'excellence', 'library', 'school', 'university', 'digital', 'csr', 'search', 'plan', 'rocket', 'star', 'users', 'check');
  CREATE TYPE "public"."enum__services_v_blocks_process_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__services_v_blocks_cta_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__services_v_blocks_enquiry_form_aside_cards_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__services_v_blocks_enquiry_form_form_type" AS ENUM('enquiry', 'career');
  CREATE TYPE "public"."enum__services_v_blocks_insights_feed_feed" AS ENUM('blog', 'news', 'event', 'case-study');
  CREATE TYPE "public"."enum__services_v_version_icon" AS ENUM('infrastructure', 'cloud', 'managed', 'staffing', 'maintenance', 'data', 'security', 'workspace', 'print', 'erp', 'classroom', 'robotics', 'excellence', 'library', 'school', 'university', 'digital', 'csr', 'search', 'plan', 'rocket', 'star', 'users', 'check');
  CREATE TYPE "public"."enum__services_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_industries_hero_actions_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_industries_hero_actions_link_style" AS ENUM('solid', 'line', 'gold', 'link');
  CREATE TYPE "public"."enum_industries_blocks_content_layout" AS ENUM('split', 'stacked');
  CREATE TYPE "public"."enum_industries_blocks_media_text_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_industries_blocks_card_grid_cards_icon" AS ENUM('infrastructure', 'cloud', 'managed', 'staffing', 'maintenance', 'data', 'security', 'workspace', 'print', 'erp', 'classroom', 'robotics', 'excellence', 'library', 'school', 'university', 'digital', 'csr', 'search', 'plan', 'rocket', 'star', 'users', 'check');
  CREATE TYPE "public"."enum_industries_blocks_card_grid_cards_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_industries_blocks_card_grid_source" AS ENUM('manual', 'children', 'services', 'industries', 'education');
  CREATE TYPE "public"."enum_industries_blocks_card_grid_style" AS ENUM('cards', 'photo', 'index');
  CREATE TYPE "public"."enum_industries_blocks_card_grid_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_industries_blocks_process_steps_icon" AS ENUM('infrastructure', 'cloud', 'managed', 'staffing', 'maintenance', 'data', 'security', 'workspace', 'print', 'erp', 'classroom', 'robotics', 'excellence', 'library', 'school', 'university', 'digital', 'csr', 'search', 'plan', 'rocket', 'star', 'users', 'check');
  CREATE TYPE "public"."enum_industries_blocks_process_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_industries_blocks_cta_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_industries_blocks_enquiry_form_aside_cards_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_industries_blocks_enquiry_form_form_type" AS ENUM('enquiry', 'career');
  CREATE TYPE "public"."enum_industries_blocks_insights_feed_feed" AS ENUM('blog', 'news', 'event', 'case-study');
  CREATE TYPE "public"."enum_industries_icon" AS ENUM('infrastructure', 'cloud', 'managed', 'staffing', 'maintenance', 'data', 'security', 'workspace', 'print', 'erp', 'classroom', 'robotics', 'excellence', 'library', 'school', 'university', 'digital', 'csr', 'search', 'plan', 'rocket', 'star', 'users', 'check');
  CREATE TYPE "public"."enum_industries_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__industries_v_version_hero_actions_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__industries_v_version_hero_actions_link_style" AS ENUM('solid', 'line', 'gold', 'link');
  CREATE TYPE "public"."enum__industries_v_blocks_content_layout" AS ENUM('split', 'stacked');
  CREATE TYPE "public"."enum__industries_v_blocks_media_text_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__industries_v_blocks_card_grid_cards_icon" AS ENUM('infrastructure', 'cloud', 'managed', 'staffing', 'maintenance', 'data', 'security', 'workspace', 'print', 'erp', 'classroom', 'robotics', 'excellence', 'library', 'school', 'university', 'digital', 'csr', 'search', 'plan', 'rocket', 'star', 'users', 'check');
  CREATE TYPE "public"."enum__industries_v_blocks_card_grid_cards_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__industries_v_blocks_card_grid_source" AS ENUM('manual', 'children', 'services', 'industries', 'education');
  CREATE TYPE "public"."enum__industries_v_blocks_card_grid_style" AS ENUM('cards', 'photo', 'index');
  CREATE TYPE "public"."enum__industries_v_blocks_card_grid_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__industries_v_blocks_process_steps_icon" AS ENUM('infrastructure', 'cloud', 'managed', 'staffing', 'maintenance', 'data', 'security', 'workspace', 'print', 'erp', 'classroom', 'robotics', 'excellence', 'library', 'school', 'university', 'digital', 'csr', 'search', 'plan', 'rocket', 'star', 'users', 'check');
  CREATE TYPE "public"."enum__industries_v_blocks_process_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__industries_v_blocks_cta_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__industries_v_blocks_enquiry_form_aside_cards_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__industries_v_blocks_enquiry_form_form_type" AS ENUM('enquiry', 'career');
  CREATE TYPE "public"."enum__industries_v_blocks_insights_feed_feed" AS ENUM('blog', 'news', 'event', 'case-study');
  CREATE TYPE "public"."enum__industries_v_version_icon" AS ENUM('infrastructure', 'cloud', 'managed', 'staffing', 'maintenance', 'data', 'security', 'workspace', 'print', 'erp', 'classroom', 'robotics', 'excellence', 'library', 'school', 'university', 'digital', 'csr', 'search', 'plan', 'rocket', 'star', 'users', 'check');
  CREATE TYPE "public"."enum__industries_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_education_hero_actions_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_education_hero_actions_link_style" AS ENUM('solid', 'line', 'gold', 'link');
  CREATE TYPE "public"."enum_education_blocks_content_layout" AS ENUM('split', 'stacked');
  CREATE TYPE "public"."enum_education_blocks_media_text_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_education_blocks_card_grid_cards_icon" AS ENUM('infrastructure', 'cloud', 'managed', 'staffing', 'maintenance', 'data', 'security', 'workspace', 'print', 'erp', 'classroom', 'robotics', 'excellence', 'library', 'school', 'university', 'digital', 'csr', 'search', 'plan', 'rocket', 'star', 'users', 'check');
  CREATE TYPE "public"."enum_education_blocks_card_grid_cards_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_education_blocks_card_grid_source" AS ENUM('manual', 'children', 'services', 'industries', 'education');
  CREATE TYPE "public"."enum_education_blocks_card_grid_style" AS ENUM('cards', 'photo', 'index');
  CREATE TYPE "public"."enum_education_blocks_card_grid_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_education_blocks_process_steps_icon" AS ENUM('infrastructure', 'cloud', 'managed', 'staffing', 'maintenance', 'data', 'security', 'workspace', 'print', 'erp', 'classroom', 'robotics', 'excellence', 'library', 'school', 'university', 'digital', 'csr', 'search', 'plan', 'rocket', 'star', 'users', 'check');
  CREATE TYPE "public"."enum_education_blocks_process_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_education_blocks_cta_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_education_blocks_enquiry_form_aside_cards_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_education_blocks_enquiry_form_form_type" AS ENUM('enquiry', 'career');
  CREATE TYPE "public"."enum_education_blocks_insights_feed_feed" AS ENUM('blog', 'news', 'event', 'case-study');
  CREATE TYPE "public"."enum_education_icon" AS ENUM('infrastructure', 'cloud', 'managed', 'staffing', 'maintenance', 'data', 'security', 'workspace', 'print', 'erp', 'classroom', 'robotics', 'excellence', 'library', 'school', 'university', 'digital', 'csr', 'search', 'plan', 'rocket', 'star', 'users', 'check');
  CREATE TYPE "public"."enum_education_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__education_v_version_hero_actions_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__education_v_version_hero_actions_link_style" AS ENUM('solid', 'line', 'gold', 'link');
  CREATE TYPE "public"."enum__education_v_blocks_content_layout" AS ENUM('split', 'stacked');
  CREATE TYPE "public"."enum__education_v_blocks_media_text_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__education_v_blocks_card_grid_cards_icon" AS ENUM('infrastructure', 'cloud', 'managed', 'staffing', 'maintenance', 'data', 'security', 'workspace', 'print', 'erp', 'classroom', 'robotics', 'excellence', 'library', 'school', 'university', 'digital', 'csr', 'search', 'plan', 'rocket', 'star', 'users', 'check');
  CREATE TYPE "public"."enum__education_v_blocks_card_grid_cards_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__education_v_blocks_card_grid_source" AS ENUM('manual', 'children', 'services', 'industries', 'education');
  CREATE TYPE "public"."enum__education_v_blocks_card_grid_style" AS ENUM('cards', 'photo', 'index');
  CREATE TYPE "public"."enum__education_v_blocks_card_grid_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__education_v_blocks_process_steps_icon" AS ENUM('infrastructure', 'cloud', 'managed', 'staffing', 'maintenance', 'data', 'security', 'workspace', 'print', 'erp', 'classroom', 'robotics', 'excellence', 'library', 'school', 'university', 'digital', 'csr', 'search', 'plan', 'rocket', 'star', 'users', 'check');
  CREATE TYPE "public"."enum__education_v_blocks_process_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__education_v_blocks_cta_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__education_v_blocks_enquiry_form_aside_cards_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__education_v_blocks_enquiry_form_form_type" AS ENUM('enquiry', 'career');
  CREATE TYPE "public"."enum__education_v_blocks_insights_feed_feed" AS ENUM('blog', 'news', 'event', 'case-study');
  CREATE TYPE "public"."enum__education_v_version_icon" AS ENUM('infrastructure', 'cloud', 'managed', 'staffing', 'maintenance', 'data', 'security', 'workspace', 'print', 'erp', 'classroom', 'robotics', 'excellence', 'library', 'school', 'university', 'digital', 'csr', 'search', 'plan', 'rocket', 'star', 'users', 'check');
  CREATE TYPE "public"."enum__education_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_posts_type" AS ENUM('blog', 'news', 'event');
  CREATE TYPE "public"."enum_posts_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_version_type" AS ENUM('blog', 'news', 'event');
  CREATE TYPE "public"."enum__posts_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_case_studies_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__case_studies_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_enquiries_type" AS ENUM('business', 'education', 'career');
  CREATE TYPE "public"."enum_enquiries_status" AS ENUM('new', 'in-progress', 'closed');
  CREATE TYPE "public"."enum_enquiries_contact_method" AS ENUM('email', 'phone', 'either');
  CREATE TYPE "public"."enum_payload_jobs_log_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_payload_jobs_log_state" AS ENUM('failed', 'succeeded');
  CREATE TYPE "public"."enum_payload_jobs_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_homepage_hero_hub_nodes_icon" AS ENUM('infrastructure', 'cloud', 'managed', 'staffing', 'maintenance', 'data', 'security', 'workspace', 'print', 'erp', 'classroom', 'robotics', 'excellence', 'library', 'school', 'university', 'digital', 'csr', 'search', 'plan', 'rocket', 'star', 'users', 'check');
  CREATE TYPE "public"."enum_homepage_hero_hub_nodes_group" AS ENUM('ent', 'edu');
  CREATE TYPE "public"."enum_homepage_approach_steps_icon" AS ENUM('infrastructure', 'cloud', 'managed', 'staffing', 'maintenance', 'data', 'security', 'workspace', 'print', 'erp', 'classroom', 'robotics', 'excellence', 'library', 'school', 'university', 'digital', 'csr', 'search', 'plan', 'rocket', 'star', 'users', 'check');
  CREATE TYPE "public"."enum_homepage_hero_primary_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_homepage_hero_secondary_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_homepage_hero_aside_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_homepage_about_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_homepage_services_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_homepage_industries_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_homepage_education_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_homepage_approach_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_homepage_insights_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_homepage_careers_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_homepage_cta_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_nav_items_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_nav_items_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_nav_items_menu_type" AS ENUM('none', 'services', 'education', 'industries', 'list');
  CREATE TYPE "public"."enum_header_nav_items_promo_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_contact_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_header_drawer_cta_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_columns_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_footer_legal_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_site_settings_socials_platform" AS ENUM('linkedin', 'x', 'facebook', 'instagram', 'youtube');
  CREATE TABLE "pages_hero_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_label" varchar,
  	"link_type" "enum_pages_hero_actions_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_style" "enum_pages_hero_actions_link_style" DEFAULT 'solid'
  );
  
  CREATE TABLE "pages_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"layout" "enum_pages_blocks_content_layout" DEFAULT 'split',
  	"body" jsonb,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_media_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"lead" varchar,
  	"body" varchar,
  	"quote" varchar,
  	"quote_caption" varchar,
  	"image_id" integer,
  	"inset_image_id" integer,
  	"link_label" varchar,
  	"link_type" "enum_pages_blocks_media_text_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_numbered_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_blocks_numbered_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"outro" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_card_grid_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"title" varchar,
  	"text" varchar,
  	"icon" "enum_pages_blocks_card_grid_cards_icon",
  	"image_id" integer,
  	"link_label" varchar,
  	"link_type" "enum_pages_blocks_card_grid_cards_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "pages_blocks_card_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"source" "enum_pages_blocks_card_grid_source" DEFAULT 'manual',
  	"style" "enum_pages_blocks_card_grid_style" DEFAULT 'cards',
  	"chips_heading" varchar,
  	"footnote" varchar,
  	"link_label" varchar,
  	"link_type" "enum_pages_blocks_card_grid_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"icon" "enum_pages_blocks_process_steps_icon"
  );
  
  CREATE TABLE "pages_blocks_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"link_label" varchar,
  	"link_type" "enum_pages_blocks_process_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"image_id" integer,
  	"link_label" varchar,
  	"link_type" "enum_pages_blocks_cta_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_enquiry_form_roles" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE "pages_blocks_enquiry_form_aside_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"link_type" "enum_pages_blocks_enquiry_form_aside_cards_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "pages_blocks_enquiry_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"form_type" "enum_pages_blocks_enquiry_form_form_type" DEFAULT 'enquiry',
  	"anchor" varchar DEFAULT 'enquiry-form',
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_insights_feed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"feed" "enum_pages_blocks_insights_feed_feed" DEFAULT 'blog',
  	"limit" numeric DEFAULT 12,
  	"empty_text" varchar DEFAULT 'Nothing has been published here yet. Please check back later, or explore our solutions in the meantime.',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_eyebrow" varchar,
  	"hero_heading" varchar,
  	"hero_lead" varchar,
  	"hero_body" varchar,
  	"hero_image_id" integer,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"meta_canonical" varchar,
  	"meta_no_index" boolean,
  	"slug" varchar,
  	"parent_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"services_id" integer,
  	"industries_id" integer,
  	"education_id" integer,
  	"posts_id" integer,
  	"case_studies_id" integer
  );
  
  CREATE TABLE "_pages_v_version_hero_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_label" varchar,
  	"link_type" "enum__pages_v_version_hero_actions_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_style" "enum__pages_v_version_hero_actions_link_style" DEFAULT 'solid',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"layout" "enum__pages_v_blocks_content_layout" DEFAULT 'split',
  	"body" jsonb,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_media_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"lead" varchar,
  	"body" varchar,
  	"quote" varchar,
  	"quote_caption" varchar,
  	"image_id" integer,
  	"inset_image_id" integer,
  	"link_label" varchar,
  	"link_type" "enum__pages_v_blocks_media_text_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_numbered_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_numbered_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"outro" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_card_grid_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"title" varchar,
  	"text" varchar,
  	"icon" "enum__pages_v_blocks_card_grid_cards_icon",
  	"image_id" integer,
  	"link_label" varchar,
  	"link_type" "enum__pages_v_blocks_card_grid_cards_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_card_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"source" "enum__pages_v_blocks_card_grid_source" DEFAULT 'manual',
  	"style" "enum__pages_v_blocks_card_grid_style" DEFAULT 'cards',
  	"chips_heading" varchar,
  	"footnote" varchar,
  	"link_label" varchar,
  	"link_type" "enum__pages_v_blocks_card_grid_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"icon" "enum__pages_v_blocks_process_steps_icon",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"link_label" varchar,
  	"link_type" "enum__pages_v_blocks_process_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"image_id" integer,
  	"link_label" varchar,
  	"link_type" "enum__pages_v_blocks_cta_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_enquiry_form_roles" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_enquiry_form_aside_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"link_type" "enum__pages_v_blocks_enquiry_form_aside_cards_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_enquiry_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"form_type" "enum__pages_v_blocks_enquiry_form_form_type" DEFAULT 'enquiry',
  	"anchor" varchar DEFAULT 'enquiry-form',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_blocks_insights_feed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"feed" "enum__pages_v_blocks_insights_feed_feed" DEFAULT 'blog',
  	"limit" numeric DEFAULT 12,
  	"empty_text" varchar DEFAULT 'Nothing has been published here yet. Please check back later, or explore our solutions in the meantime.',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_pages_v_version_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_eyebrow" varchar,
  	"version_hero_heading" varchar,
  	"version_hero_lead" varchar,
  	"version_hero_body" varchar,
  	"version_hero_image_id" integer,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_canonical" varchar,
  	"version_meta_no_index" boolean,
  	"version_slug" varchar,
  	"version_parent_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"services_id" integer,
  	"industries_id" integer,
  	"education_id" integer,
  	"posts_id" integer,
  	"case_studies_id" integer
  );
  
  CREATE TABLE "services_hero_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_label" varchar,
  	"link_type" "enum_services_hero_actions_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_style" "enum_services_hero_actions_link_style" DEFAULT 'solid'
  );
  
  CREATE TABLE "services_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"layout" "enum_services_blocks_content_layout" DEFAULT 'split',
  	"body" jsonb,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_media_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"lead" varchar,
  	"body" varchar,
  	"quote" varchar,
  	"quote_caption" varchar,
  	"image_id" integer,
  	"inset_image_id" integer,
  	"link_label" varchar,
  	"link_type" "enum_services_blocks_media_text_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_numbered_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "services_blocks_numbered_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"outro" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_card_grid_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"title" varchar,
  	"text" varchar,
  	"icon" "enum_services_blocks_card_grid_cards_icon",
  	"image_id" integer,
  	"link_label" varchar,
  	"link_type" "enum_services_blocks_card_grid_cards_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "services_blocks_card_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"source" "enum_services_blocks_card_grid_source" DEFAULT 'manual',
  	"style" "enum_services_blocks_card_grid_style" DEFAULT 'cards',
  	"chips_heading" varchar,
  	"footnote" varchar,
  	"link_label" varchar,
  	"link_type" "enum_services_blocks_card_grid_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"icon" "enum_services_blocks_process_steps_icon"
  );
  
  CREATE TABLE "services_blocks_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"link_label" varchar,
  	"link_type" "enum_services_blocks_process_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"image_id" integer,
  	"link_label" varchar,
  	"link_type" "enum_services_blocks_cta_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_enquiry_form_roles" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE "services_blocks_enquiry_form_aside_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"link_type" "enum_services_blocks_enquiry_form_aside_cards_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "services_blocks_enquiry_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"form_type" "enum_services_blocks_enquiry_form_form_type" DEFAULT 'enquiry',
  	"anchor" varchar DEFAULT 'enquiry-form',
  	"block_name" varchar
  );
  
  CREATE TABLE "services_blocks_insights_feed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"feed" "enum_services_blocks_insights_feed_feed" DEFAULT 'blog',
  	"limit" numeric DEFAULT 12,
  	"empty_text" varchar DEFAULT 'Nothing has been published here yet. Please check back later, or explore our solutions in the meantime.',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "services_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "services" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_eyebrow" varchar,
  	"hero_heading" varchar,
  	"hero_lead" varchar,
  	"hero_body" varchar,
  	"hero_image_id" integer,
  	"tagline" varchar,
  	"excerpt" varchar,
  	"icon" "enum_services_icon",
  	"card_image_id" integer,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"meta_canonical" varchar,
  	"meta_no_index" boolean,
  	"slug" varchar,
  	"order" numeric DEFAULT 0,
  	"show_in_menu" boolean DEFAULT true,
  	"parent_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_services_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "services_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"services_id" integer,
  	"industries_id" integer,
  	"education_id" integer,
  	"posts_id" integer,
  	"case_studies_id" integer
  );
  
  CREATE TABLE "_services_v_version_hero_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_label" varchar,
  	"link_type" "enum__services_v_version_hero_actions_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_style" "enum__services_v_version_hero_actions_link_style" DEFAULT 'solid',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"layout" "enum__services_v_blocks_content_layout" DEFAULT 'split',
  	"body" jsonb,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_media_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"lead" varchar,
  	"body" varchar,
  	"quote" varchar,
  	"quote_caption" varchar,
  	"image_id" integer,
  	"inset_image_id" integer,
  	"link_label" varchar,
  	"link_type" "enum__services_v_blocks_media_text_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_numbered_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_numbered_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"outro" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_card_grid_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"title" varchar,
  	"text" varchar,
  	"icon" "enum__services_v_blocks_card_grid_cards_icon",
  	"image_id" integer,
  	"link_label" varchar,
  	"link_type" "enum__services_v_blocks_card_grid_cards_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_card_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"source" "enum__services_v_blocks_card_grid_source" DEFAULT 'manual',
  	"style" "enum__services_v_blocks_card_grid_style" DEFAULT 'cards',
  	"chips_heading" varchar,
  	"footnote" varchar,
  	"link_label" varchar,
  	"link_type" "enum__services_v_blocks_card_grid_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"icon" "enum__services_v_blocks_process_steps_icon",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"link_label" varchar,
  	"link_type" "enum__services_v_blocks_process_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"image_id" integer,
  	"link_label" varchar,
  	"link_type" "enum__services_v_blocks_cta_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_enquiry_form_roles" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_enquiry_form_aside_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"link_type" "enum__services_v_blocks_enquiry_form_aside_cards_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v_blocks_enquiry_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"form_type" "enum__services_v_blocks_enquiry_form_form_type" DEFAULT 'enquiry',
  	"anchor" varchar DEFAULT 'enquiry-form',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_blocks_insights_feed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"feed" "enum__services_v_blocks_insights_feed_feed" DEFAULT 'blog',
  	"limit" numeric DEFAULT 12,
  	"empty_text" varchar DEFAULT 'Nothing has been published here yet. Please check back later, or explore our solutions in the meantime.',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_services_v_version_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_services_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_eyebrow" varchar,
  	"version_hero_heading" varchar,
  	"version_hero_lead" varchar,
  	"version_hero_body" varchar,
  	"version_hero_image_id" integer,
  	"version_tagline" varchar,
  	"version_excerpt" varchar,
  	"version_icon" "enum__services_v_version_icon",
  	"version_card_image_id" integer,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_canonical" varchar,
  	"version_meta_no_index" boolean,
  	"version_slug" varchar,
  	"version_order" numeric DEFAULT 0,
  	"version_show_in_menu" boolean DEFAULT true,
  	"version_parent_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__services_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "_services_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"services_id" integer,
  	"industries_id" integer,
  	"education_id" integer,
  	"posts_id" integer,
  	"case_studies_id" integer
  );
  
  CREATE TABLE "industries_hero_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_label" varchar,
  	"link_type" "enum_industries_hero_actions_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_style" "enum_industries_hero_actions_link_style" DEFAULT 'solid'
  );
  
  CREATE TABLE "industries_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"layout" "enum_industries_blocks_content_layout" DEFAULT 'split',
  	"body" jsonb,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "industries_blocks_media_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"lead" varchar,
  	"body" varchar,
  	"quote" varchar,
  	"quote_caption" varchar,
  	"image_id" integer,
  	"inset_image_id" integer,
  	"link_label" varchar,
  	"link_type" "enum_industries_blocks_media_text_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "industries_blocks_numbered_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "industries_blocks_numbered_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"outro" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "industries_blocks_card_grid_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"title" varchar,
  	"text" varchar,
  	"icon" "enum_industries_blocks_card_grid_cards_icon",
  	"image_id" integer,
  	"link_label" varchar,
  	"link_type" "enum_industries_blocks_card_grid_cards_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "industries_blocks_card_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"source" "enum_industries_blocks_card_grid_source" DEFAULT 'manual',
  	"style" "enum_industries_blocks_card_grid_style" DEFAULT 'cards',
  	"chips_heading" varchar,
  	"footnote" varchar,
  	"link_label" varchar,
  	"link_type" "enum_industries_blocks_card_grid_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "industries_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"icon" "enum_industries_blocks_process_steps_icon"
  );
  
  CREATE TABLE "industries_blocks_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"link_label" varchar,
  	"link_type" "enum_industries_blocks_process_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "industries_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"image_id" integer,
  	"link_label" varchar,
  	"link_type" "enum_industries_blocks_cta_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "industries_blocks_enquiry_form_roles" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE "industries_blocks_enquiry_form_aside_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"link_type" "enum_industries_blocks_enquiry_form_aside_cards_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "industries_blocks_enquiry_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"form_type" "enum_industries_blocks_enquiry_form_form_type" DEFAULT 'enquiry',
  	"anchor" varchar DEFAULT 'enquiry-form',
  	"block_name" varchar
  );
  
  CREATE TABLE "industries_blocks_insights_feed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"feed" "enum_industries_blocks_insights_feed_feed" DEFAULT 'blog',
  	"limit" numeric DEFAULT 12,
  	"empty_text" varchar DEFAULT 'Nothing has been published here yet. Please check back later, or explore our solutions in the meantime.',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "industries" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_eyebrow" varchar,
  	"hero_heading" varchar,
  	"hero_lead" varchar,
  	"hero_body" varchar,
  	"hero_image_id" integer,
  	"tagline" varchar,
  	"excerpt" varchar,
  	"icon" "enum_industries_icon",
  	"card_image_id" integer,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"meta_canonical" varchar,
  	"meta_no_index" boolean,
  	"slug" varchar,
  	"order" numeric DEFAULT 0,
  	"show_in_menu" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_industries_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "industries_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"services_id" integer,
  	"industries_id" integer,
  	"education_id" integer,
  	"posts_id" integer,
  	"case_studies_id" integer
  );
  
  CREATE TABLE "_industries_v_version_hero_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_label" varchar,
  	"link_type" "enum__industries_v_version_hero_actions_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_style" "enum__industries_v_version_hero_actions_link_style" DEFAULT 'solid',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_industries_v_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"layout" "enum__industries_v_blocks_content_layout" DEFAULT 'split',
  	"body" jsonb,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_industries_v_blocks_media_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"lead" varchar,
  	"body" varchar,
  	"quote" varchar,
  	"quote_caption" varchar,
  	"image_id" integer,
  	"inset_image_id" integer,
  	"link_label" varchar,
  	"link_type" "enum__industries_v_blocks_media_text_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_industries_v_blocks_numbered_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_industries_v_blocks_numbered_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"outro" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_industries_v_blocks_card_grid_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"title" varchar,
  	"text" varchar,
  	"icon" "enum__industries_v_blocks_card_grid_cards_icon",
  	"image_id" integer,
  	"link_label" varchar,
  	"link_type" "enum__industries_v_blocks_card_grid_cards_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_industries_v_blocks_card_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"source" "enum__industries_v_blocks_card_grid_source" DEFAULT 'manual',
  	"style" "enum__industries_v_blocks_card_grid_style" DEFAULT 'cards',
  	"chips_heading" varchar,
  	"footnote" varchar,
  	"link_label" varchar,
  	"link_type" "enum__industries_v_blocks_card_grid_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_industries_v_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"icon" "enum__industries_v_blocks_process_steps_icon",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_industries_v_blocks_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"link_label" varchar,
  	"link_type" "enum__industries_v_blocks_process_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_industries_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"image_id" integer,
  	"link_label" varchar,
  	"link_type" "enum__industries_v_blocks_cta_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_industries_v_blocks_enquiry_form_roles" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_industries_v_blocks_enquiry_form_aside_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"link_type" "enum__industries_v_blocks_enquiry_form_aside_cards_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_industries_v_blocks_enquiry_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"form_type" "enum__industries_v_blocks_enquiry_form_form_type" DEFAULT 'enquiry',
  	"anchor" varchar DEFAULT 'enquiry-form',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_industries_v_blocks_insights_feed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"feed" "enum__industries_v_blocks_insights_feed_feed" DEFAULT 'blog',
  	"limit" numeric DEFAULT 12,
  	"empty_text" varchar DEFAULT 'Nothing has been published here yet. Please check back later, or explore our solutions in the meantime.',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_industries_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_eyebrow" varchar,
  	"version_hero_heading" varchar,
  	"version_hero_lead" varchar,
  	"version_hero_body" varchar,
  	"version_hero_image_id" integer,
  	"version_tagline" varchar,
  	"version_excerpt" varchar,
  	"version_icon" "enum__industries_v_version_icon",
  	"version_card_image_id" integer,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_canonical" varchar,
  	"version_meta_no_index" boolean,
  	"version_slug" varchar,
  	"version_order" numeric DEFAULT 0,
  	"version_show_in_menu" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__industries_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "_industries_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"services_id" integer,
  	"industries_id" integer,
  	"education_id" integer,
  	"posts_id" integer,
  	"case_studies_id" integer
  );
  
  CREATE TABLE "education_hero_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_label" varchar,
  	"link_type" "enum_education_hero_actions_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_style" "enum_education_hero_actions_link_style" DEFAULT 'solid'
  );
  
  CREATE TABLE "education_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"layout" "enum_education_blocks_content_layout" DEFAULT 'split',
  	"body" jsonb,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "education_blocks_media_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"lead" varchar,
  	"body" varchar,
  	"quote" varchar,
  	"quote_caption" varchar,
  	"image_id" integer,
  	"inset_image_id" integer,
  	"link_label" varchar,
  	"link_type" "enum_education_blocks_media_text_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "education_blocks_numbered_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "education_blocks_numbered_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"outro" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "education_blocks_card_grid_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"title" varchar,
  	"text" varchar,
  	"icon" "enum_education_blocks_card_grid_cards_icon",
  	"image_id" integer,
  	"link_label" varchar,
  	"link_type" "enum_education_blocks_card_grid_cards_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "education_blocks_card_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"source" "enum_education_blocks_card_grid_source" DEFAULT 'manual',
  	"style" "enum_education_blocks_card_grid_style" DEFAULT 'cards',
  	"chips_heading" varchar,
  	"footnote" varchar,
  	"link_label" varchar,
  	"link_type" "enum_education_blocks_card_grid_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "education_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"icon" "enum_education_blocks_process_steps_icon"
  );
  
  CREATE TABLE "education_blocks_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"link_label" varchar,
  	"link_type" "enum_education_blocks_process_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "education_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"image_id" integer,
  	"link_label" varchar,
  	"link_type" "enum_education_blocks_cta_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "education_blocks_enquiry_form_roles" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE "education_blocks_enquiry_form_aside_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"link_type" "enum_education_blocks_enquiry_form_aside_cards_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "education_blocks_enquiry_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"form_type" "enum_education_blocks_enquiry_form_form_type" DEFAULT 'enquiry',
  	"anchor" varchar DEFAULT 'enquiry-form',
  	"block_name" varchar
  );
  
  CREATE TABLE "education_blocks_insights_feed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"feed" "enum_education_blocks_insights_feed_feed" DEFAULT 'blog',
  	"limit" numeric DEFAULT 12,
  	"empty_text" varchar DEFAULT 'Nothing has been published here yet. Please check back later, or explore our solutions in the meantime.',
  	"anchor" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "education_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar
  );
  
  CREATE TABLE "education" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_eyebrow" varchar,
  	"hero_heading" varchar,
  	"hero_lead" varchar,
  	"hero_body" varchar,
  	"hero_image_id" integer,
  	"tagline" varchar,
  	"excerpt" varchar,
  	"icon" "enum_education_icon",
  	"card_image_id" integer,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"meta_canonical" varchar,
  	"meta_no_index" boolean,
  	"slug" varchar,
  	"order" numeric DEFAULT 0,
  	"show_in_menu" boolean DEFAULT true,
  	"parent_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_education_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "education_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"services_id" integer,
  	"industries_id" integer,
  	"education_id" integer,
  	"posts_id" integer,
  	"case_studies_id" integer
  );
  
  CREATE TABLE "_education_v_version_hero_actions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_label" varchar,
  	"link_type" "enum__education_v_version_hero_actions_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_style" "enum__education_v_version_hero_actions_link_style" DEFAULT 'solid',
  	"_uuid" varchar
  );
  
  CREATE TABLE "_education_v_blocks_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"layout" "enum__education_v_blocks_content_layout" DEFAULT 'split',
  	"body" jsonb,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_education_v_blocks_media_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"lead" varchar,
  	"body" varchar,
  	"quote" varchar,
  	"quote_caption" varchar,
  	"image_id" integer,
  	"inset_image_id" integer,
  	"link_label" varchar,
  	"link_type" "enum__education_v_blocks_media_text_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_education_v_blocks_numbered_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_education_v_blocks_numbered_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"outro" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_education_v_blocks_card_grid_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"title" varchar,
  	"text" varchar,
  	"icon" "enum__education_v_blocks_card_grid_cards_icon",
  	"image_id" integer,
  	"link_label" varchar,
  	"link_type" "enum__education_v_blocks_card_grid_cards_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_education_v_blocks_card_grid" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"source" "enum__education_v_blocks_card_grid_source" DEFAULT 'manual',
  	"style" "enum__education_v_blocks_card_grid_style" DEFAULT 'cards',
  	"chips_heading" varchar,
  	"footnote" varchar,
  	"link_label" varchar,
  	"link_type" "enum__education_v_blocks_card_grid_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_education_v_blocks_process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"icon" "enum__education_v_blocks_process_steps_icon",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_education_v_blocks_process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"link_label" varchar,
  	"link_type" "enum__education_v_blocks_process_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_education_v_blocks_cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar,
  	"image_id" integer,
  	"link_label" varchar,
  	"link_type" "enum__education_v_blocks_cta_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_education_v_blocks_enquiry_form_roles" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_education_v_blocks_enquiry_form_aside_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"text" varchar,
  	"link_label" varchar,
  	"link_type" "enum__education_v_blocks_enquiry_form_aside_cards_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_education_v_blocks_enquiry_form" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"form_type" "enum__education_v_blocks_enquiry_form_form_type" DEFAULT 'enquiry',
  	"anchor" varchar DEFAULT 'enquiry-form',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_education_v_blocks_insights_feed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar,
  	"heading" varchar,
  	"intro" varchar,
  	"feed" "enum__education_v_blocks_insights_feed_feed" DEFAULT 'blog',
  	"limit" numeric DEFAULT 12,
  	"empty_text" varchar DEFAULT 'Nothing has been published here yet. Please check back later, or explore our solutions in the meantime.',
  	"anchor" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_education_v_version_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_education_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_eyebrow" varchar,
  	"version_hero_heading" varchar,
  	"version_hero_lead" varchar,
  	"version_hero_body" varchar,
  	"version_hero_image_id" integer,
  	"version_tagline" varchar,
  	"version_excerpt" varchar,
  	"version_icon" "enum__education_v_version_icon",
  	"version_card_image_id" integer,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_canonical" varchar,
  	"version_meta_no_index" boolean,
  	"version_slug" varchar,
  	"version_order" numeric DEFAULT 0,
  	"version_show_in_menu" boolean DEFAULT true,
  	"version_parent_id" integer,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__education_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "_education_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"services_id" integer,
  	"industries_id" integer,
  	"education_id" integer,
  	"posts_id" integer,
  	"case_studies_id" integer
  );
  
  CREATE TABLE "posts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"excerpt" varchar,
  	"hero_image_id" integer,
  	"content" jsonb,
  	"event_date" timestamp(3) with time zone,
  	"event_location" varchar,
  	"registration_url" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"meta_canonical" varchar,
  	"meta_no_index" boolean,
  	"type" "enum_posts_type" DEFAULT 'blog',
  	"category" varchar,
  	"author" varchar,
  	"reading_time" numeric,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_posts_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "_posts_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_excerpt" varchar,
  	"version_hero_image_id" integer,
  	"version_content" jsonb,
  	"version_event_date" timestamp(3) with time zone,
  	"version_event_location" varchar,
  	"version_registration_url" varchar,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_canonical" varchar,
  	"version_meta_no_index" boolean,
  	"version_type" "enum__posts_v_version_type" DEFAULT 'blog',
  	"version_category" varchar,
  	"version_author" varchar,
  	"version_reading_time" numeric,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__posts_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "case_studies" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"outcome" varchar,
  	"hero_image_id" integer,
  	"requirement" jsonb,
  	"solution" jsonb,
  	"results" jsonb,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"meta_canonical" varchar,
  	"meta_no_index" boolean,
  	"industry_id" integer,
  	"client" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_case_studies_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "case_studies_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"services_id" integer
  );
  
  CREATE TABLE "_case_studies_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_outcome" varchar,
  	"version_hero_image_id" integer,
  	"version_requirement" jsonb,
  	"version_solution" jsonb,
  	"version_results" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_description" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_canonical" varchar,
  	"version_meta_no_index" boolean,
  	"version_industry_id" integer,
  	"version_client" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__case_studies_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean
  );
  
  CREATE TABLE "_case_studies_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"services_id" integer
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"caption" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_card_url" varchar,
  	"sizes_card_width" numeric,
  	"sizes_card_height" numeric,
  	"sizes_card_mime_type" varchar,
  	"sizes_card_filesize" numeric,
  	"sizes_card_filename" varchar,
  	"sizes_feature_url" varchar,
  	"sizes_feature_width" numeric,
  	"sizes_feature_height" numeric,
  	"sizes_feature_mime_type" varchar,
  	"sizes_feature_filesize" numeric,
  	"sizes_feature_filename" varchar,
  	"sizes_og_url" varchar,
  	"sizes_og_width" numeric,
  	"sizes_og_height" numeric,
  	"sizes_og_mime_type" varchar,
  	"sizes_og_filesize" numeric,
  	"sizes_og_filename" varchar
  );
  
  CREATE TABLE "enquiries" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum_enquiries_type" NOT NULL,
  	"status" "enum_enquiries_status" DEFAULT 'new',
  	"name" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"phone" varchar,
  	"company" varchar,
  	"designation" varchar,
  	"location" varchar,
  	"area" varchar,
  	"solution" varchar,
  	"industry" varchar,
  	"role" varchar,
  	"experience" varchar,
  	"message" varchar,
  	"contact_method" "enum_enquiries_contact_method",
  	"resume_id" integer,
  	"consent" boolean DEFAULT false NOT NULL,
  	"source_page" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "resumes" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"reset_password_requested_at" timestamp(3) with time zone,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_jobs_log" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"executed_at" timestamp(3) with time zone NOT NULL,
  	"completed_at" timestamp(3) with time zone NOT NULL,
  	"task_slug" "enum_payload_jobs_log_task_slug" NOT NULL,
  	"task_i_d" varchar NOT NULL,
  	"input" jsonb,
  	"output" jsonb,
  	"state" "enum_payload_jobs_log_state" NOT NULL,
  	"error" jsonb
  );
  
  CREATE TABLE "payload_jobs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"input" jsonb,
  	"completed_at" timestamp(3) with time zone,
  	"total_tried" numeric DEFAULT 0,
  	"has_error" boolean DEFAULT false,
  	"error" jsonb,
  	"task_slug" "enum_payload_jobs_task_slug",
  	"queue" varchar DEFAULT 'default',
  	"wait_until" timestamp(3) with time zone,
  	"processing" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"services_id" integer,
  	"industries_id" integer,
  	"education_id" integer,
  	"posts_id" integer,
  	"case_studies_id" integer,
  	"media_id" integer,
  	"enquiries_id" integer,
  	"resumes_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "homepage_hero_hub_nodes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"icon" "enum_homepage_hero_hub_nodes_icon",
  	"group" "enum_homepage_hero_hub_nodes_group" DEFAULT 'ent'
  );
  
  CREATE TABLE "homepage_ticker_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "homepage_approach_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar,
  	"icon" "enum_homepage_approach_steps_icon"
  );
  
  CREATE TABLE "homepage" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_kicker" varchar,
  	"hero_heading_line" varchar NOT NULL,
  	"hero_heading_emphasis" varchar,
  	"hero_lead" varchar,
  	"hero_column_one" varchar,
  	"hero_column_two" varchar,
  	"hero_primary_label" varchar,
  	"hero_primary_type" "enum_homepage_hero_primary_type" DEFAULT 'custom',
  	"hero_primary_new_tab" boolean,
  	"hero_primary_url" varchar,
  	"hero_secondary_label" varchar,
  	"hero_secondary_type" "enum_homepage_hero_secondary_type" DEFAULT 'custom',
  	"hero_secondary_new_tab" boolean,
  	"hero_secondary_url" varchar,
  	"hero_aside_text" varchar,
  	"hero_aside_link_label" varchar,
  	"hero_aside_link_type" "enum_homepage_hero_aside_link_type" DEFAULT 'custom',
  	"hero_aside_link_new_tab" boolean,
  	"hero_aside_link_url" varchar,
  	"hero_hub_image_id" integer,
  	"hero_legend_enterprise" varchar DEFAULT 'Enterprise technology',
  	"hero_legend_education" varchar DEFAULT 'Education solutions',
  	"about_kicker" varchar DEFAULT 'About SAID Technologies',
  	"about_heading" varchar DEFAULT 'Connecting Business, Technology and Learning',
  	"about_lead" varchar,
  	"about_body" varchar,
  	"about_quote" varchar,
  	"about_quote_caption" varchar,
  	"about_image_id" integer,
  	"about_inset_image_id" integer,
  	"about_link_label" varchar,
  	"about_link_type" "enum_homepage_about_link_type" DEFAULT 'custom',
  	"about_link_new_tab" boolean,
  	"about_link_url" varchar,
  	"services_kicker" varchar DEFAULT 'What We Do',
  	"services_heading" varchar DEFAULT 'Explore Our Technology Solutions',
  	"services_link_label" varchar,
  	"services_link_type" "enum_homepage_services_link_type" DEFAULT 'custom',
  	"services_link_new_tab" boolean,
  	"services_link_url" varchar,
  	"industries_kicker" varchar DEFAULT 'Industries',
  	"industries_heading" varchar DEFAULT 'Technology Across Industries',
  	"industries_intro" varchar,
  	"industries_link_label" varchar,
  	"industries_link_type" "enum_homepage_industries_link_type" DEFAULT 'custom',
  	"industries_link_new_tab" boolean,
  	"industries_link_url" varchar,
  	"education_kicker" varchar DEFAULT 'Education',
  	"education_heading" varchar DEFAULT 'Education That Connects Knowledge With Practice',
  	"education_lead" varchar,
  	"education_body" varchar,
  	"education_link_label" varchar,
  	"education_link_type" "enum_homepage_education_link_type" DEFAULT 'custom',
  	"education_link_new_tab" boolean,
  	"education_link_url" varchar,
  	"approach_kicker" varchar DEFAULT 'Our Approach',
  	"approach_heading" varchar DEFAULT 'From Requirement to Implementation',
  	"approach_link_label" varchar,
  	"approach_link_type" "enum_homepage_approach_link_type" DEFAULT 'custom',
  	"approach_link_new_tab" boolean,
  	"approach_link_url" varchar,
  	"insights_enabled" boolean DEFAULT true,
  	"insights_kicker" varchar DEFAULT 'Insights',
  	"insights_heading" varchar DEFAULT 'Perspectives for better technology decisions.',
  	"insights_link_label" varchar,
  	"insights_link_type" "enum_homepage_insights_link_type" DEFAULT 'custom',
  	"insights_link_new_tab" boolean,
  	"insights_link_url" varchar,
  	"insights_blogs_heading" varchar DEFAULT 'Blogs',
  	"insights_case_studies_heading" varchar DEFAULT 'Case Studies',
  	"careers_kicker" varchar DEFAULT 'Careers',
  	"careers_heading" varchar DEFAULT 'Careers at SAID',
  	"careers_lead" varchar,
  	"careers_link_label" varchar,
  	"careers_link_type" "enum_homepage_careers_link_type" DEFAULT 'custom',
  	"careers_link_new_tab" boolean,
  	"careers_link_url" varchar,
  	"careers_image_id" integer,
  	"cta_heading" varchar,
  	"cta_text" varchar,
  	"cta_link_label" varchar,
  	"cta_link_type" "enum_homepage_cta_link_type" DEFAULT 'custom',
  	"cta_link_new_tab" boolean,
  	"cta_link_url" varchar,
  	"cta_image_id" integer,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"meta_canonical" varchar,
  	"meta_no_index" boolean,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "homepage_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"services_id" integer,
  	"industries_id" integer,
  	"education_id" integer,
  	"posts_id" integer,
  	"case_studies_id" integer
  );
  
  CREATE TABLE "header_nav_items_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"description" varchar,
  	"link_type" "enum_header_nav_items_links_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "header_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"link_type" "enum_header_nav_items_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"menu_type" "enum_header_nav_items_menu_type" DEFAULT 'list',
  	"intro" varchar,
  	"all_label" varchar,
  	"promo_image_id" integer,
  	"promo_text" varchar,
  	"promo_link_label" varchar,
  	"promo_link_type" "enum_header_nav_items_promo_link_type" DEFAULT 'custom',
  	"promo_link_new_tab" boolean,
  	"promo_link_url" varchar
  );
  
  CREATE TABLE "header_contact_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_label" varchar,
  	"link_type" "enum_header_contact_links_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"cta_label" varchar,
  	"cta_type" "enum_header_cta_type" DEFAULT 'custom',
  	"cta_new_tab" boolean,
  	"cta_url" varchar,
  	"drawer_cta_label" varchar,
  	"drawer_cta_type" "enum_header_drawer_cta_type" DEFAULT 'custom',
  	"drawer_cta_new_tab" boolean,
  	"drawer_cta_url" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "header_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"services_id" integer,
  	"industries_id" integer,
  	"education_id" integer,
  	"posts_id" integer,
  	"case_studies_id" integer
  );
  
  CREATE TABLE "footer_columns_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_label" varchar,
  	"link_type" "enum_footer_columns_links_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "footer_columns" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL
  );
  
  CREATE TABLE "footer_legal_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_label" varchar,
  	"link_type" "enum_footer_legal_links_link_type" DEFAULT 'custom',
  	"link_new_tab" boolean,
  	"link_url" varchar
  );
  
  CREATE TABLE "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"kicker" varchar DEFAULT 'SAID Technologies Pvt. Ltd.',
  	"tagline" varchar DEFAULT 'Services, Automation & Integrations Delivered',
  	"about" varchar,
  	"copyright" varchar DEFAULT '© {year} SAID Technologies Pvt. Ltd. All rights reserved.',
  	"credit_prefix" varchar DEFAULT 'Design and Developed By',
  	"credit_name" varchar DEFAULT 'Movinnza',
  	"credit_url" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "footer_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"services_id" integer,
  	"industries_id" integer,
  	"education_id" integer,
  	"posts_id" integer,
  	"case_studies_id" integer
  );
  
  CREATE TABLE "site_settings_socials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_site_settings_socials_platform" NOT NULL,
  	"url" varchar NOT NULL
  );
  
  CREATE TABLE "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"site_name" varchar DEFAULT 'SAID Technologies' NOT NULL,
  	"legal_name" varchar DEFAULT 'SAID Technologies Pvt. Ltd.',
  	"tagline" varchar DEFAULT 'Creating Possibilities. Delivering Solutions.',
  	"contact_email" varchar,
  	"contact_phone" varchar,
  	"contact_address" varchar,
  	"contact_city" varchar,
  	"contact_region" varchar,
  	"contact_postal_code" varchar,
  	"contact_country" varchar DEFAULT 'IN',
  	"contact_map_url" varchar,
  	"title_suffix" varchar DEFAULT 'SAID Technologies',
  	"default_description" varchar,
  	"og_image_id" integer,
  	"twitter_handle" varchar,
  	"no_index" boolean,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "pages_hero_actions" ADD CONSTRAINT "pages_hero_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_content" ADD CONSTRAINT "pages_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_text" ADD CONSTRAINT "pages_blocks_media_text_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_text" ADD CONSTRAINT "pages_blocks_media_text_inset_image_id_media_id_fk" FOREIGN KEY ("inset_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_media_text" ADD CONSTRAINT "pages_blocks_media_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_numbered_list_items" ADD CONSTRAINT "pages_blocks_numbered_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_numbered_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_numbered_list" ADD CONSTRAINT "pages_blocks_numbered_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_card_grid_cards" ADD CONSTRAINT "pages_blocks_card_grid_cards_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_card_grid_cards" ADD CONSTRAINT "pages_blocks_card_grid_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_card_grid" ADD CONSTRAINT "pages_blocks_card_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_process_steps" ADD CONSTRAINT "pages_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_process"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_process" ADD CONSTRAINT "pages_blocks_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_cta" ADD CONSTRAINT "pages_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_enquiry_form_roles" ADD CONSTRAINT "pages_blocks_enquiry_form_roles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_enquiry_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_enquiry_form_aside_cards" ADD CONSTRAINT "pages_blocks_enquiry_form_aside_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_enquiry_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_enquiry_form" ADD CONSTRAINT "pages_blocks_enquiry_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_insights_feed" ADD CONSTRAINT "pages_blocks_insights_feed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_breadcrumbs" ADD CONSTRAINT "pages_breadcrumbs_doc_id_pages_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_breadcrumbs" ADD CONSTRAINT "pages_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_industries_fk" FOREIGN KEY ("industries_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_education_fk" FOREIGN KEY ("education_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_hero_actions" ADD CONSTRAINT "_pages_v_version_hero_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_content" ADD CONSTRAINT "_pages_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_text" ADD CONSTRAINT "_pages_v_blocks_media_text_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_text" ADD CONSTRAINT "_pages_v_blocks_media_text_inset_image_id_media_id_fk" FOREIGN KEY ("inset_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_media_text" ADD CONSTRAINT "_pages_v_blocks_media_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_numbered_list_items" ADD CONSTRAINT "_pages_v_blocks_numbered_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_numbered_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_numbered_list" ADD CONSTRAINT "_pages_v_blocks_numbered_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_card_grid_cards" ADD CONSTRAINT "_pages_v_blocks_card_grid_cards_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_card_grid_cards" ADD CONSTRAINT "_pages_v_blocks_card_grid_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_card_grid" ADD CONSTRAINT "_pages_v_blocks_card_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_process_steps" ADD CONSTRAINT "_pages_v_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_process"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_process" ADD CONSTRAINT "_pages_v_blocks_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta" ADD CONSTRAINT "_pages_v_blocks_cta_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_cta" ADD CONSTRAINT "_pages_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_enquiry_form_roles" ADD CONSTRAINT "_pages_v_blocks_enquiry_form_roles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_enquiry_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_enquiry_form_aside_cards" ADD CONSTRAINT "_pages_v_blocks_enquiry_form_aside_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_enquiry_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_enquiry_form" ADD CONSTRAINT "_pages_v_blocks_enquiry_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_blocks_insights_feed" ADD CONSTRAINT "_pages_v_blocks_insights_feed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_breadcrumbs" ADD CONSTRAINT "_pages_v_version_breadcrumbs_doc_id_pages_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_version_breadcrumbs" ADD CONSTRAINT "_pages_v_version_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_parent_id_pages_id_fk" FOREIGN KEY ("version_parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_industries_fk" FOREIGN KEY ("industries_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_education_fk" FOREIGN KEY ("education_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_hero_actions" ADD CONSTRAINT "services_hero_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_content" ADD CONSTRAINT "services_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_media_text" ADD CONSTRAINT "services_blocks_media_text_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_media_text" ADD CONSTRAINT "services_blocks_media_text_inset_image_id_media_id_fk" FOREIGN KEY ("inset_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_media_text" ADD CONSTRAINT "services_blocks_media_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_numbered_list_items" ADD CONSTRAINT "services_blocks_numbered_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_numbered_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_numbered_list" ADD CONSTRAINT "services_blocks_numbered_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_card_grid_cards" ADD CONSTRAINT "services_blocks_card_grid_cards_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_card_grid_cards" ADD CONSTRAINT "services_blocks_card_grid_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_card_grid" ADD CONSTRAINT "services_blocks_card_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_process_steps" ADD CONSTRAINT "services_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_process"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_process" ADD CONSTRAINT "services_blocks_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_cta" ADD CONSTRAINT "services_blocks_cta_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_blocks_cta" ADD CONSTRAINT "services_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_enquiry_form_roles" ADD CONSTRAINT "services_blocks_enquiry_form_roles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_enquiry_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_enquiry_form_aside_cards" ADD CONSTRAINT "services_blocks_enquiry_form_aside_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_blocks_enquiry_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_enquiry_form" ADD CONSTRAINT "services_blocks_enquiry_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_blocks_insights_feed" ADD CONSTRAINT "services_blocks_insights_feed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_breadcrumbs" ADD CONSTRAINT "services_breadcrumbs_doc_id_services_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_breadcrumbs" ADD CONSTRAINT "services_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_card_image_id_media_id_fk" FOREIGN KEY ("card_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_parent_id_services_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_industries_fk" FOREIGN KEY ("industries_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_education_fk" FOREIGN KEY ("education_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_version_hero_actions" ADD CONSTRAINT "_services_v_version_hero_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_content" ADD CONSTRAINT "_services_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_media_text" ADD CONSTRAINT "_services_v_blocks_media_text_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_media_text" ADD CONSTRAINT "_services_v_blocks_media_text_inset_image_id_media_id_fk" FOREIGN KEY ("inset_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_media_text" ADD CONSTRAINT "_services_v_blocks_media_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_numbered_list_items" ADD CONSTRAINT "_services_v_blocks_numbered_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_numbered_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_numbered_list" ADD CONSTRAINT "_services_v_blocks_numbered_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_card_grid_cards" ADD CONSTRAINT "_services_v_blocks_card_grid_cards_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_card_grid_cards" ADD CONSTRAINT "_services_v_blocks_card_grid_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_card_grid" ADD CONSTRAINT "_services_v_blocks_card_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_process_steps" ADD CONSTRAINT "_services_v_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_process"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_process" ADD CONSTRAINT "_services_v_blocks_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_cta" ADD CONSTRAINT "_services_v_blocks_cta_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_cta" ADD CONSTRAINT "_services_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_enquiry_form_roles" ADD CONSTRAINT "_services_v_blocks_enquiry_form_roles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_enquiry_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_enquiry_form_aside_cards" ADD CONSTRAINT "_services_v_blocks_enquiry_form_aside_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v_blocks_enquiry_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_enquiry_form" ADD CONSTRAINT "_services_v_blocks_enquiry_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_blocks_insights_feed" ADD CONSTRAINT "_services_v_blocks_insights_feed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_version_breadcrumbs" ADD CONSTRAINT "_services_v_version_breadcrumbs_doc_id_services_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_version_breadcrumbs" ADD CONSTRAINT "_services_v_version_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_parent_id_services_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_version_card_image_id_media_id_fk" FOREIGN KEY ("version_card_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_version_parent_id_services_id_fk" FOREIGN KEY ("version_parent_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_industries_fk" FOREIGN KEY ("industries_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_education_fk" FOREIGN KEY ("education_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "industries_hero_actions" ADD CONSTRAINT "industries_hero_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "industries_blocks_content" ADD CONSTRAINT "industries_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "industries_blocks_media_text" ADD CONSTRAINT "industries_blocks_media_text_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "industries_blocks_media_text" ADD CONSTRAINT "industries_blocks_media_text_inset_image_id_media_id_fk" FOREIGN KEY ("inset_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "industries_blocks_media_text" ADD CONSTRAINT "industries_blocks_media_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "industries_blocks_numbered_list_items" ADD CONSTRAINT "industries_blocks_numbered_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."industries_blocks_numbered_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "industries_blocks_numbered_list" ADD CONSTRAINT "industries_blocks_numbered_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "industries_blocks_card_grid_cards" ADD CONSTRAINT "industries_blocks_card_grid_cards_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "industries_blocks_card_grid_cards" ADD CONSTRAINT "industries_blocks_card_grid_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."industries_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "industries_blocks_card_grid" ADD CONSTRAINT "industries_blocks_card_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "industries_blocks_process_steps" ADD CONSTRAINT "industries_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."industries_blocks_process"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "industries_blocks_process" ADD CONSTRAINT "industries_blocks_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "industries_blocks_cta" ADD CONSTRAINT "industries_blocks_cta_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "industries_blocks_cta" ADD CONSTRAINT "industries_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "industries_blocks_enquiry_form_roles" ADD CONSTRAINT "industries_blocks_enquiry_form_roles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."industries_blocks_enquiry_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "industries_blocks_enquiry_form_aside_cards" ADD CONSTRAINT "industries_blocks_enquiry_form_aside_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."industries_blocks_enquiry_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "industries_blocks_enquiry_form" ADD CONSTRAINT "industries_blocks_enquiry_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "industries_blocks_insights_feed" ADD CONSTRAINT "industries_blocks_insights_feed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "industries" ADD CONSTRAINT "industries_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "industries" ADD CONSTRAINT "industries_card_image_id_media_id_fk" FOREIGN KEY ("card_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "industries" ADD CONSTRAINT "industries_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "industries_rels" ADD CONSTRAINT "industries_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "industries_rels" ADD CONSTRAINT "industries_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "industries_rels" ADD CONSTRAINT "industries_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "industries_rels" ADD CONSTRAINT "industries_rels_industries_fk" FOREIGN KEY ("industries_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "industries_rels" ADD CONSTRAINT "industries_rels_education_fk" FOREIGN KEY ("education_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "industries_rels" ADD CONSTRAINT "industries_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "industries_rels" ADD CONSTRAINT "industries_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_industries_v_version_hero_actions" ADD CONSTRAINT "_industries_v_version_hero_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_industries_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_industries_v_blocks_content" ADD CONSTRAINT "_industries_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_industries_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_industries_v_blocks_media_text" ADD CONSTRAINT "_industries_v_blocks_media_text_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_industries_v_blocks_media_text" ADD CONSTRAINT "_industries_v_blocks_media_text_inset_image_id_media_id_fk" FOREIGN KEY ("inset_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_industries_v_blocks_media_text" ADD CONSTRAINT "_industries_v_blocks_media_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_industries_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_industries_v_blocks_numbered_list_items" ADD CONSTRAINT "_industries_v_blocks_numbered_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_industries_v_blocks_numbered_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_industries_v_blocks_numbered_list" ADD CONSTRAINT "_industries_v_blocks_numbered_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_industries_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_industries_v_blocks_card_grid_cards" ADD CONSTRAINT "_industries_v_blocks_card_grid_cards_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_industries_v_blocks_card_grid_cards" ADD CONSTRAINT "_industries_v_blocks_card_grid_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_industries_v_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_industries_v_blocks_card_grid" ADD CONSTRAINT "_industries_v_blocks_card_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_industries_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_industries_v_blocks_process_steps" ADD CONSTRAINT "_industries_v_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_industries_v_blocks_process"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_industries_v_blocks_process" ADD CONSTRAINT "_industries_v_blocks_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_industries_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_industries_v_blocks_cta" ADD CONSTRAINT "_industries_v_blocks_cta_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_industries_v_blocks_cta" ADD CONSTRAINT "_industries_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_industries_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_industries_v_blocks_enquiry_form_roles" ADD CONSTRAINT "_industries_v_blocks_enquiry_form_roles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_industries_v_blocks_enquiry_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_industries_v_blocks_enquiry_form_aside_cards" ADD CONSTRAINT "_industries_v_blocks_enquiry_form_aside_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_industries_v_blocks_enquiry_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_industries_v_blocks_enquiry_form" ADD CONSTRAINT "_industries_v_blocks_enquiry_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_industries_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_industries_v_blocks_insights_feed" ADD CONSTRAINT "_industries_v_blocks_insights_feed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_industries_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_industries_v" ADD CONSTRAINT "_industries_v_parent_id_industries_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."industries"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_industries_v" ADD CONSTRAINT "_industries_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_industries_v" ADD CONSTRAINT "_industries_v_version_card_image_id_media_id_fk" FOREIGN KEY ("version_card_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_industries_v" ADD CONSTRAINT "_industries_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_industries_v_rels" ADD CONSTRAINT "_industries_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_industries_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_industries_v_rels" ADD CONSTRAINT "_industries_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_industries_v_rels" ADD CONSTRAINT "_industries_v_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_industries_v_rels" ADD CONSTRAINT "_industries_v_rels_industries_fk" FOREIGN KEY ("industries_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_industries_v_rels" ADD CONSTRAINT "_industries_v_rels_education_fk" FOREIGN KEY ("education_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_industries_v_rels" ADD CONSTRAINT "_industries_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_industries_v_rels" ADD CONSTRAINT "_industries_v_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_hero_actions" ADD CONSTRAINT "education_hero_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_blocks_content" ADD CONSTRAINT "education_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_blocks_media_text" ADD CONSTRAINT "education_blocks_media_text_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "education_blocks_media_text" ADD CONSTRAINT "education_blocks_media_text_inset_image_id_media_id_fk" FOREIGN KEY ("inset_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "education_blocks_media_text" ADD CONSTRAINT "education_blocks_media_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_blocks_numbered_list_items" ADD CONSTRAINT "education_blocks_numbered_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."education_blocks_numbered_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_blocks_numbered_list" ADD CONSTRAINT "education_blocks_numbered_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_blocks_card_grid_cards" ADD CONSTRAINT "education_blocks_card_grid_cards_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "education_blocks_card_grid_cards" ADD CONSTRAINT "education_blocks_card_grid_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."education_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_blocks_card_grid" ADD CONSTRAINT "education_blocks_card_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_blocks_process_steps" ADD CONSTRAINT "education_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."education_blocks_process"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_blocks_process" ADD CONSTRAINT "education_blocks_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_blocks_cta" ADD CONSTRAINT "education_blocks_cta_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "education_blocks_cta" ADD CONSTRAINT "education_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_blocks_enquiry_form_roles" ADD CONSTRAINT "education_blocks_enquiry_form_roles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."education_blocks_enquiry_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_blocks_enquiry_form_aside_cards" ADD CONSTRAINT "education_blocks_enquiry_form_aside_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."education_blocks_enquiry_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_blocks_enquiry_form" ADD CONSTRAINT "education_blocks_enquiry_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_blocks_insights_feed" ADD CONSTRAINT "education_blocks_insights_feed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_breadcrumbs" ADD CONSTRAINT "education_breadcrumbs_doc_id_education_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."education"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "education_breadcrumbs" ADD CONSTRAINT "education_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education" ADD CONSTRAINT "education_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "education" ADD CONSTRAINT "education_card_image_id_media_id_fk" FOREIGN KEY ("card_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "education" ADD CONSTRAINT "education_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "education" ADD CONSTRAINT "education_parent_id_education_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."education"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "education_rels" ADD CONSTRAINT "education_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_rels" ADD CONSTRAINT "education_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_rels" ADD CONSTRAINT "education_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_rels" ADD CONSTRAINT "education_rels_industries_fk" FOREIGN KEY ("industries_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_rels" ADD CONSTRAINT "education_rels_education_fk" FOREIGN KEY ("education_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_rels" ADD CONSTRAINT "education_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "education_rels" ADD CONSTRAINT "education_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v_version_hero_actions" ADD CONSTRAINT "_education_v_version_hero_actions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_education_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v_blocks_content" ADD CONSTRAINT "_education_v_blocks_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_education_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v_blocks_media_text" ADD CONSTRAINT "_education_v_blocks_media_text_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_education_v_blocks_media_text" ADD CONSTRAINT "_education_v_blocks_media_text_inset_image_id_media_id_fk" FOREIGN KEY ("inset_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_education_v_blocks_media_text" ADD CONSTRAINT "_education_v_blocks_media_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_education_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v_blocks_numbered_list_items" ADD CONSTRAINT "_education_v_blocks_numbered_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_education_v_blocks_numbered_list"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v_blocks_numbered_list" ADD CONSTRAINT "_education_v_blocks_numbered_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_education_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v_blocks_card_grid_cards" ADD CONSTRAINT "_education_v_blocks_card_grid_cards_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_education_v_blocks_card_grid_cards" ADD CONSTRAINT "_education_v_blocks_card_grid_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_education_v_blocks_card_grid"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v_blocks_card_grid" ADD CONSTRAINT "_education_v_blocks_card_grid_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_education_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v_blocks_process_steps" ADD CONSTRAINT "_education_v_blocks_process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_education_v_blocks_process"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v_blocks_process" ADD CONSTRAINT "_education_v_blocks_process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_education_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v_blocks_cta" ADD CONSTRAINT "_education_v_blocks_cta_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_education_v_blocks_cta" ADD CONSTRAINT "_education_v_blocks_cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_education_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v_blocks_enquiry_form_roles" ADD CONSTRAINT "_education_v_blocks_enquiry_form_roles_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_education_v_blocks_enquiry_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v_blocks_enquiry_form_aside_cards" ADD CONSTRAINT "_education_v_blocks_enquiry_form_aside_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_education_v_blocks_enquiry_form"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v_blocks_enquiry_form" ADD CONSTRAINT "_education_v_blocks_enquiry_form_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_education_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v_blocks_insights_feed" ADD CONSTRAINT "_education_v_blocks_insights_feed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_education_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v_version_breadcrumbs" ADD CONSTRAINT "_education_v_version_breadcrumbs_doc_id_education_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."education"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_education_v_version_breadcrumbs" ADD CONSTRAINT "_education_v_version_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_education_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v" ADD CONSTRAINT "_education_v_parent_id_education_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."education"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_education_v" ADD CONSTRAINT "_education_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_education_v" ADD CONSTRAINT "_education_v_version_card_image_id_media_id_fk" FOREIGN KEY ("version_card_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_education_v" ADD CONSTRAINT "_education_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_education_v" ADD CONSTRAINT "_education_v_version_parent_id_education_id_fk" FOREIGN KEY ("version_parent_id") REFERENCES "public"."education"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_education_v_rels" ADD CONSTRAINT "_education_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_education_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v_rels" ADD CONSTRAINT "_education_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v_rels" ADD CONSTRAINT "_education_v_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v_rels" ADD CONSTRAINT "_education_v_rels_industries_fk" FOREIGN KEY ("industries_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v_rels" ADD CONSTRAINT "_education_v_rels_education_fk" FOREIGN KEY ("education_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v_rels" ADD CONSTRAINT "_education_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_education_v_rels" ADD CONSTRAINT "_education_v_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "posts" ADD CONSTRAINT "posts_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_parent_id_posts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies" ADD CONSTRAINT "case_studies_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies" ADD CONSTRAINT "case_studies_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies" ADD CONSTRAINT "case_studies_industry_id_industries_id_fk" FOREIGN KEY ("industry_id") REFERENCES "public"."industries"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies_rels" ADD CONSTRAINT "case_studies_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "case_studies_rels" ADD CONSTRAINT "case_studies_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v" ADD CONSTRAINT "_case_studies_v_parent_id_case_studies_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."case_studies"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v" ADD CONSTRAINT "_case_studies_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v" ADD CONSTRAINT "_case_studies_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v" ADD CONSTRAINT "_case_studies_v_version_industry_id_industries_id_fk" FOREIGN KEY ("version_industry_id") REFERENCES "public"."industries"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_case_studies_v_rels" ADD CONSTRAINT "_case_studies_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_case_studies_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_case_studies_v_rels" ADD CONSTRAINT "_case_studies_v_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "enquiries" ADD CONSTRAINT "enquiries_resume_id_resumes_id_fk" FOREIGN KEY ("resume_id") REFERENCES "public"."resumes"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_jobs_log" ADD CONSTRAINT "payload_jobs_log_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_industries_fk" FOREIGN KEY ("industries_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_education_fk" FOREIGN KEY ("education_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_enquiries_fk" FOREIGN KEY ("enquiries_id") REFERENCES "public"."enquiries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_resumes_fk" FOREIGN KEY ("resumes_id") REFERENCES "public"."resumes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_hero_hub_nodes" ADD CONSTRAINT "homepage_hero_hub_nodes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_ticker_items" ADD CONSTRAINT "homepage_ticker_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_approach_steps" ADD CONSTRAINT "homepage_approach_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage" ADD CONSTRAINT "homepage_hero_hub_image_id_media_id_fk" FOREIGN KEY ("hero_hub_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage" ADD CONSTRAINT "homepage_about_image_id_media_id_fk" FOREIGN KEY ("about_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage" ADD CONSTRAINT "homepage_about_inset_image_id_media_id_fk" FOREIGN KEY ("about_inset_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage" ADD CONSTRAINT "homepage_careers_image_id_media_id_fk" FOREIGN KEY ("careers_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage" ADD CONSTRAINT "homepage_cta_image_id_media_id_fk" FOREIGN KEY ("cta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage" ADD CONSTRAINT "homepage_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_industries_fk" FOREIGN KEY ("industries_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_education_fk" FOREIGN KEY ("education_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_rels" ADD CONSTRAINT "homepage_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_items_links" ADD CONSTRAINT "header_nav_items_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_nav_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_nav_items" ADD CONSTRAINT "header_nav_items_promo_image_id_media_id_fk" FOREIGN KEY ("promo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "header_nav_items" ADD CONSTRAINT "header_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_contact_links" ADD CONSTRAINT "header_contact_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_industries_fk" FOREIGN KEY ("industries_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_education_fk" FOREIGN KEY ("education_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_columns_links" ADD CONSTRAINT "footer_columns_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_columns"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_columns" ADD CONSTRAINT "footer_columns_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_legal_links" ADD CONSTRAINT "footer_legal_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_industries_fk" FOREIGN KEY ("industries_id") REFERENCES "public"."industries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_education_fk" FOREIGN KEY ("education_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_rels" ADD CONSTRAINT "footer_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_socials" ADD CONSTRAINT "site_settings_socials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_og_image_id_media_id_fk" FOREIGN KEY ("og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_hero_actions_order_idx" ON "pages_hero_actions" USING btree ("_order");
  CREATE INDEX "pages_hero_actions_parent_id_idx" ON "pages_hero_actions" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_order_idx" ON "pages_blocks_content" USING btree ("_order");
  CREATE INDEX "pages_blocks_content_parent_id_idx" ON "pages_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_content_path_idx" ON "pages_blocks_content" USING btree ("_path");
  CREATE INDEX "pages_blocks_media_text_order_idx" ON "pages_blocks_media_text" USING btree ("_order");
  CREATE INDEX "pages_blocks_media_text_parent_id_idx" ON "pages_blocks_media_text" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_media_text_path_idx" ON "pages_blocks_media_text" USING btree ("_path");
  CREATE INDEX "pages_blocks_media_text_image_idx" ON "pages_blocks_media_text" USING btree ("image_id");
  CREATE INDEX "pages_blocks_media_text_inset_image_idx" ON "pages_blocks_media_text" USING btree ("inset_image_id");
  CREATE INDEX "pages_blocks_numbered_list_items_order_idx" ON "pages_blocks_numbered_list_items" USING btree ("_order");
  CREATE INDEX "pages_blocks_numbered_list_items_parent_id_idx" ON "pages_blocks_numbered_list_items" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_numbered_list_order_idx" ON "pages_blocks_numbered_list" USING btree ("_order");
  CREATE INDEX "pages_blocks_numbered_list_parent_id_idx" ON "pages_blocks_numbered_list" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_numbered_list_path_idx" ON "pages_blocks_numbered_list" USING btree ("_path");
  CREATE INDEX "pages_blocks_card_grid_cards_order_idx" ON "pages_blocks_card_grid_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_card_grid_cards_parent_id_idx" ON "pages_blocks_card_grid_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_card_grid_cards_image_idx" ON "pages_blocks_card_grid_cards" USING btree ("image_id");
  CREATE INDEX "pages_blocks_card_grid_order_idx" ON "pages_blocks_card_grid" USING btree ("_order");
  CREATE INDEX "pages_blocks_card_grid_parent_id_idx" ON "pages_blocks_card_grid" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_card_grid_path_idx" ON "pages_blocks_card_grid" USING btree ("_path");
  CREATE INDEX "pages_blocks_process_steps_order_idx" ON "pages_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "pages_blocks_process_steps_parent_id_idx" ON "pages_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_process_order_idx" ON "pages_blocks_process" USING btree ("_order");
  CREATE INDEX "pages_blocks_process_parent_id_idx" ON "pages_blocks_process" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_process_path_idx" ON "pages_blocks_process" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta_order_idx" ON "pages_blocks_cta" USING btree ("_order");
  CREATE INDEX "pages_blocks_cta_parent_id_idx" ON "pages_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_cta_path_idx" ON "pages_blocks_cta" USING btree ("_path");
  CREATE INDEX "pages_blocks_cta_image_idx" ON "pages_blocks_cta" USING btree ("image_id");
  CREATE INDEX "pages_blocks_enquiry_form_roles_order_idx" ON "pages_blocks_enquiry_form_roles" USING btree ("_order");
  CREATE INDEX "pages_blocks_enquiry_form_roles_parent_id_idx" ON "pages_blocks_enquiry_form_roles" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_enquiry_form_aside_cards_order_idx" ON "pages_blocks_enquiry_form_aside_cards" USING btree ("_order");
  CREATE INDEX "pages_blocks_enquiry_form_aside_cards_parent_id_idx" ON "pages_blocks_enquiry_form_aside_cards" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_enquiry_form_order_idx" ON "pages_blocks_enquiry_form" USING btree ("_order");
  CREATE INDEX "pages_blocks_enquiry_form_parent_id_idx" ON "pages_blocks_enquiry_form" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_enquiry_form_path_idx" ON "pages_blocks_enquiry_form" USING btree ("_path");
  CREATE INDEX "pages_blocks_insights_feed_order_idx" ON "pages_blocks_insights_feed" USING btree ("_order");
  CREATE INDEX "pages_blocks_insights_feed_parent_id_idx" ON "pages_blocks_insights_feed" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_insights_feed_path_idx" ON "pages_blocks_insights_feed" USING btree ("_path");
  CREATE INDEX "pages_breadcrumbs_order_idx" ON "pages_breadcrumbs" USING btree ("_order");
  CREATE INDEX "pages_breadcrumbs_parent_id_idx" ON "pages_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "pages_breadcrumbs_doc_idx" ON "pages_breadcrumbs" USING btree ("doc_id");
  CREATE INDEX "pages_hero_hero_image_idx" ON "pages" USING btree ("hero_image_id");
  CREATE INDEX "pages_meta_meta_image_idx" ON "pages" USING btree ("meta_image_id");
  CREATE INDEX "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX "pages_parent_idx" ON "pages" USING btree ("parent_id");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_pages_id_idx" ON "pages_rels" USING btree ("pages_id");
  CREATE INDEX "pages_rels_services_id_idx" ON "pages_rels" USING btree ("services_id");
  CREATE INDEX "pages_rels_industries_id_idx" ON "pages_rels" USING btree ("industries_id");
  CREATE INDEX "pages_rels_education_id_idx" ON "pages_rels" USING btree ("education_id");
  CREATE INDEX "pages_rels_posts_id_idx" ON "pages_rels" USING btree ("posts_id");
  CREATE INDEX "pages_rels_case_studies_id_idx" ON "pages_rels" USING btree ("case_studies_id");
  CREATE INDEX "_pages_v_version_hero_actions_order_idx" ON "_pages_v_version_hero_actions" USING btree ("_order");
  CREATE INDEX "_pages_v_version_hero_actions_parent_id_idx" ON "_pages_v_version_hero_actions" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_order_idx" ON "_pages_v_blocks_content" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_content_parent_id_idx" ON "_pages_v_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_content_path_idx" ON "_pages_v_blocks_content" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_media_text_order_idx" ON "_pages_v_blocks_media_text" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_media_text_parent_id_idx" ON "_pages_v_blocks_media_text" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_media_text_path_idx" ON "_pages_v_blocks_media_text" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_media_text_image_idx" ON "_pages_v_blocks_media_text" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_media_text_inset_image_idx" ON "_pages_v_blocks_media_text" USING btree ("inset_image_id");
  CREATE INDEX "_pages_v_blocks_numbered_list_items_order_idx" ON "_pages_v_blocks_numbered_list_items" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_numbered_list_items_parent_id_idx" ON "_pages_v_blocks_numbered_list_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_numbered_list_order_idx" ON "_pages_v_blocks_numbered_list" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_numbered_list_parent_id_idx" ON "_pages_v_blocks_numbered_list" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_numbered_list_path_idx" ON "_pages_v_blocks_numbered_list" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_card_grid_cards_order_idx" ON "_pages_v_blocks_card_grid_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_card_grid_cards_parent_id_idx" ON "_pages_v_blocks_card_grid_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_card_grid_cards_image_idx" ON "_pages_v_blocks_card_grid_cards" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_card_grid_order_idx" ON "_pages_v_blocks_card_grid" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_card_grid_parent_id_idx" ON "_pages_v_blocks_card_grid" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_card_grid_path_idx" ON "_pages_v_blocks_card_grid" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_process_steps_order_idx" ON "_pages_v_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_process_steps_parent_id_idx" ON "_pages_v_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_process_order_idx" ON "_pages_v_blocks_process" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_process_parent_id_idx" ON "_pages_v_blocks_process" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_process_path_idx" ON "_pages_v_blocks_process" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cta_order_idx" ON "_pages_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_cta_parent_id_idx" ON "_pages_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_cta_path_idx" ON "_pages_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_cta_image_idx" ON "_pages_v_blocks_cta" USING btree ("image_id");
  CREATE INDEX "_pages_v_blocks_enquiry_form_roles_order_idx" ON "_pages_v_blocks_enquiry_form_roles" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_enquiry_form_roles_parent_id_idx" ON "_pages_v_blocks_enquiry_form_roles" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_enquiry_form_aside_cards_order_idx" ON "_pages_v_blocks_enquiry_form_aside_cards" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_enquiry_form_aside_cards_parent_id_idx" ON "_pages_v_blocks_enquiry_form_aside_cards" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_enquiry_form_order_idx" ON "_pages_v_blocks_enquiry_form" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_enquiry_form_parent_id_idx" ON "_pages_v_blocks_enquiry_form" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_enquiry_form_path_idx" ON "_pages_v_blocks_enquiry_form" USING btree ("_path");
  CREATE INDEX "_pages_v_blocks_insights_feed_order_idx" ON "_pages_v_blocks_insights_feed" USING btree ("_order");
  CREATE INDEX "_pages_v_blocks_insights_feed_parent_id_idx" ON "_pages_v_blocks_insights_feed" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_blocks_insights_feed_path_idx" ON "_pages_v_blocks_insights_feed" USING btree ("_path");
  CREATE INDEX "_pages_v_version_breadcrumbs_order_idx" ON "_pages_v_version_breadcrumbs" USING btree ("_order");
  CREATE INDEX "_pages_v_version_breadcrumbs_parent_id_idx" ON "_pages_v_version_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_breadcrumbs_doc_idx" ON "_pages_v_version_breadcrumbs" USING btree ("doc_id");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_hero_version_hero_image_idx" ON "_pages_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX "_pages_v_version_version_parent_idx" ON "_pages_v" USING btree ("version_parent_id");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX "_pages_v_rels_pages_id_idx" ON "_pages_v_rels" USING btree ("pages_id");
  CREATE INDEX "_pages_v_rels_services_id_idx" ON "_pages_v_rels" USING btree ("services_id");
  CREATE INDEX "_pages_v_rels_industries_id_idx" ON "_pages_v_rels" USING btree ("industries_id");
  CREATE INDEX "_pages_v_rels_education_id_idx" ON "_pages_v_rels" USING btree ("education_id");
  CREATE INDEX "_pages_v_rels_posts_id_idx" ON "_pages_v_rels" USING btree ("posts_id");
  CREATE INDEX "_pages_v_rels_case_studies_id_idx" ON "_pages_v_rels" USING btree ("case_studies_id");
  CREATE INDEX "services_hero_actions_order_idx" ON "services_hero_actions" USING btree ("_order");
  CREATE INDEX "services_hero_actions_parent_id_idx" ON "services_hero_actions" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_content_order_idx" ON "services_blocks_content" USING btree ("_order");
  CREATE INDEX "services_blocks_content_parent_id_idx" ON "services_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_content_path_idx" ON "services_blocks_content" USING btree ("_path");
  CREATE INDEX "services_blocks_media_text_order_idx" ON "services_blocks_media_text" USING btree ("_order");
  CREATE INDEX "services_blocks_media_text_parent_id_idx" ON "services_blocks_media_text" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_media_text_path_idx" ON "services_blocks_media_text" USING btree ("_path");
  CREATE INDEX "services_blocks_media_text_image_idx" ON "services_blocks_media_text" USING btree ("image_id");
  CREATE INDEX "services_blocks_media_text_inset_image_idx" ON "services_blocks_media_text" USING btree ("inset_image_id");
  CREATE INDEX "services_blocks_numbered_list_items_order_idx" ON "services_blocks_numbered_list_items" USING btree ("_order");
  CREATE INDEX "services_blocks_numbered_list_items_parent_id_idx" ON "services_blocks_numbered_list_items" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_numbered_list_order_idx" ON "services_blocks_numbered_list" USING btree ("_order");
  CREATE INDEX "services_blocks_numbered_list_parent_id_idx" ON "services_blocks_numbered_list" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_numbered_list_path_idx" ON "services_blocks_numbered_list" USING btree ("_path");
  CREATE INDEX "services_blocks_card_grid_cards_order_idx" ON "services_blocks_card_grid_cards" USING btree ("_order");
  CREATE INDEX "services_blocks_card_grid_cards_parent_id_idx" ON "services_blocks_card_grid_cards" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_card_grid_cards_image_idx" ON "services_blocks_card_grid_cards" USING btree ("image_id");
  CREATE INDEX "services_blocks_card_grid_order_idx" ON "services_blocks_card_grid" USING btree ("_order");
  CREATE INDEX "services_blocks_card_grid_parent_id_idx" ON "services_blocks_card_grid" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_card_grid_path_idx" ON "services_blocks_card_grid" USING btree ("_path");
  CREATE INDEX "services_blocks_process_steps_order_idx" ON "services_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "services_blocks_process_steps_parent_id_idx" ON "services_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_process_order_idx" ON "services_blocks_process" USING btree ("_order");
  CREATE INDEX "services_blocks_process_parent_id_idx" ON "services_blocks_process" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_process_path_idx" ON "services_blocks_process" USING btree ("_path");
  CREATE INDEX "services_blocks_cta_order_idx" ON "services_blocks_cta" USING btree ("_order");
  CREATE INDEX "services_blocks_cta_parent_id_idx" ON "services_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_cta_path_idx" ON "services_blocks_cta" USING btree ("_path");
  CREATE INDEX "services_blocks_cta_image_idx" ON "services_blocks_cta" USING btree ("image_id");
  CREATE INDEX "services_blocks_enquiry_form_roles_order_idx" ON "services_blocks_enquiry_form_roles" USING btree ("_order");
  CREATE INDEX "services_blocks_enquiry_form_roles_parent_id_idx" ON "services_blocks_enquiry_form_roles" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_enquiry_form_aside_cards_order_idx" ON "services_blocks_enquiry_form_aside_cards" USING btree ("_order");
  CREATE INDEX "services_blocks_enquiry_form_aside_cards_parent_id_idx" ON "services_blocks_enquiry_form_aside_cards" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_enquiry_form_order_idx" ON "services_blocks_enquiry_form" USING btree ("_order");
  CREATE INDEX "services_blocks_enquiry_form_parent_id_idx" ON "services_blocks_enquiry_form" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_enquiry_form_path_idx" ON "services_blocks_enquiry_form" USING btree ("_path");
  CREATE INDEX "services_blocks_insights_feed_order_idx" ON "services_blocks_insights_feed" USING btree ("_order");
  CREATE INDEX "services_blocks_insights_feed_parent_id_idx" ON "services_blocks_insights_feed" USING btree ("_parent_id");
  CREATE INDEX "services_blocks_insights_feed_path_idx" ON "services_blocks_insights_feed" USING btree ("_path");
  CREATE INDEX "services_breadcrumbs_order_idx" ON "services_breadcrumbs" USING btree ("_order");
  CREATE INDEX "services_breadcrumbs_parent_id_idx" ON "services_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "services_breadcrumbs_doc_idx" ON "services_breadcrumbs" USING btree ("doc_id");
  CREATE INDEX "services_hero_hero_image_idx" ON "services" USING btree ("hero_image_id");
  CREATE INDEX "services_card_image_idx" ON "services" USING btree ("card_image_id");
  CREATE INDEX "services_meta_meta_image_idx" ON "services" USING btree ("meta_image_id");
  CREATE INDEX "services_slug_idx" ON "services" USING btree ("slug");
  CREATE INDEX "services_order_idx" ON "services" USING btree ("order");
  CREATE INDEX "services_parent_idx" ON "services" USING btree ("parent_id");
  CREATE INDEX "services_updated_at_idx" ON "services" USING btree ("updated_at");
  CREATE INDEX "services_created_at_idx" ON "services" USING btree ("created_at");
  CREATE INDEX "services__status_idx" ON "services" USING btree ("_status");
  CREATE INDEX "services_rels_order_idx" ON "services_rels" USING btree ("order");
  CREATE INDEX "services_rels_parent_idx" ON "services_rels" USING btree ("parent_id");
  CREATE INDEX "services_rels_path_idx" ON "services_rels" USING btree ("path");
  CREATE INDEX "services_rels_pages_id_idx" ON "services_rels" USING btree ("pages_id");
  CREATE INDEX "services_rels_services_id_idx" ON "services_rels" USING btree ("services_id");
  CREATE INDEX "services_rels_industries_id_idx" ON "services_rels" USING btree ("industries_id");
  CREATE INDEX "services_rels_education_id_idx" ON "services_rels" USING btree ("education_id");
  CREATE INDEX "services_rels_posts_id_idx" ON "services_rels" USING btree ("posts_id");
  CREATE INDEX "services_rels_case_studies_id_idx" ON "services_rels" USING btree ("case_studies_id");
  CREATE INDEX "_services_v_version_hero_actions_order_idx" ON "_services_v_version_hero_actions" USING btree ("_order");
  CREATE INDEX "_services_v_version_hero_actions_parent_id_idx" ON "_services_v_version_hero_actions" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_content_order_idx" ON "_services_v_blocks_content" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_content_parent_id_idx" ON "_services_v_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_content_path_idx" ON "_services_v_blocks_content" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_media_text_order_idx" ON "_services_v_blocks_media_text" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_media_text_parent_id_idx" ON "_services_v_blocks_media_text" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_media_text_path_idx" ON "_services_v_blocks_media_text" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_media_text_image_idx" ON "_services_v_blocks_media_text" USING btree ("image_id");
  CREATE INDEX "_services_v_blocks_media_text_inset_image_idx" ON "_services_v_blocks_media_text" USING btree ("inset_image_id");
  CREATE INDEX "_services_v_blocks_numbered_list_items_order_idx" ON "_services_v_blocks_numbered_list_items" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_numbered_list_items_parent_id_idx" ON "_services_v_blocks_numbered_list_items" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_numbered_list_order_idx" ON "_services_v_blocks_numbered_list" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_numbered_list_parent_id_idx" ON "_services_v_blocks_numbered_list" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_numbered_list_path_idx" ON "_services_v_blocks_numbered_list" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_card_grid_cards_order_idx" ON "_services_v_blocks_card_grid_cards" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_card_grid_cards_parent_id_idx" ON "_services_v_blocks_card_grid_cards" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_card_grid_cards_image_idx" ON "_services_v_blocks_card_grid_cards" USING btree ("image_id");
  CREATE INDEX "_services_v_blocks_card_grid_order_idx" ON "_services_v_blocks_card_grid" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_card_grid_parent_id_idx" ON "_services_v_blocks_card_grid" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_card_grid_path_idx" ON "_services_v_blocks_card_grid" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_process_steps_order_idx" ON "_services_v_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_process_steps_parent_id_idx" ON "_services_v_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_process_order_idx" ON "_services_v_blocks_process" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_process_parent_id_idx" ON "_services_v_blocks_process" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_process_path_idx" ON "_services_v_blocks_process" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_cta_order_idx" ON "_services_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_cta_parent_id_idx" ON "_services_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_cta_path_idx" ON "_services_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_cta_image_idx" ON "_services_v_blocks_cta" USING btree ("image_id");
  CREATE INDEX "_services_v_blocks_enquiry_form_roles_order_idx" ON "_services_v_blocks_enquiry_form_roles" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_enquiry_form_roles_parent_id_idx" ON "_services_v_blocks_enquiry_form_roles" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_enquiry_form_aside_cards_order_idx" ON "_services_v_blocks_enquiry_form_aside_cards" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_enquiry_form_aside_cards_parent_id_idx" ON "_services_v_blocks_enquiry_form_aside_cards" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_enquiry_form_order_idx" ON "_services_v_blocks_enquiry_form" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_enquiry_form_parent_id_idx" ON "_services_v_blocks_enquiry_form" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_enquiry_form_path_idx" ON "_services_v_blocks_enquiry_form" USING btree ("_path");
  CREATE INDEX "_services_v_blocks_insights_feed_order_idx" ON "_services_v_blocks_insights_feed" USING btree ("_order");
  CREATE INDEX "_services_v_blocks_insights_feed_parent_id_idx" ON "_services_v_blocks_insights_feed" USING btree ("_parent_id");
  CREATE INDEX "_services_v_blocks_insights_feed_path_idx" ON "_services_v_blocks_insights_feed" USING btree ("_path");
  CREATE INDEX "_services_v_version_breadcrumbs_order_idx" ON "_services_v_version_breadcrumbs" USING btree ("_order");
  CREATE INDEX "_services_v_version_breadcrumbs_parent_id_idx" ON "_services_v_version_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "_services_v_version_breadcrumbs_doc_idx" ON "_services_v_version_breadcrumbs" USING btree ("doc_id");
  CREATE INDEX "_services_v_parent_idx" ON "_services_v" USING btree ("parent_id");
  CREATE INDEX "_services_v_version_hero_version_hero_image_idx" ON "_services_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_services_v_version_version_card_image_idx" ON "_services_v" USING btree ("version_card_image_id");
  CREATE INDEX "_services_v_version_meta_version_meta_image_idx" ON "_services_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_services_v_version_version_slug_idx" ON "_services_v" USING btree ("version_slug");
  CREATE INDEX "_services_v_version_version_order_idx" ON "_services_v" USING btree ("version_order");
  CREATE INDEX "_services_v_version_version_parent_idx" ON "_services_v" USING btree ("version_parent_id");
  CREATE INDEX "_services_v_version_version_updated_at_idx" ON "_services_v" USING btree ("version_updated_at");
  CREATE INDEX "_services_v_version_version_created_at_idx" ON "_services_v" USING btree ("version_created_at");
  CREATE INDEX "_services_v_version_version__status_idx" ON "_services_v" USING btree ("version__status");
  CREATE INDEX "_services_v_created_at_idx" ON "_services_v" USING btree ("created_at");
  CREATE INDEX "_services_v_updated_at_idx" ON "_services_v" USING btree ("updated_at");
  CREATE INDEX "_services_v_latest_idx" ON "_services_v" USING btree ("latest");
  CREATE INDEX "_services_v_rels_order_idx" ON "_services_v_rels" USING btree ("order");
  CREATE INDEX "_services_v_rels_parent_idx" ON "_services_v_rels" USING btree ("parent_id");
  CREATE INDEX "_services_v_rels_path_idx" ON "_services_v_rels" USING btree ("path");
  CREATE INDEX "_services_v_rels_pages_id_idx" ON "_services_v_rels" USING btree ("pages_id");
  CREATE INDEX "_services_v_rels_services_id_idx" ON "_services_v_rels" USING btree ("services_id");
  CREATE INDEX "_services_v_rels_industries_id_idx" ON "_services_v_rels" USING btree ("industries_id");
  CREATE INDEX "_services_v_rels_education_id_idx" ON "_services_v_rels" USING btree ("education_id");
  CREATE INDEX "_services_v_rels_posts_id_idx" ON "_services_v_rels" USING btree ("posts_id");
  CREATE INDEX "_services_v_rels_case_studies_id_idx" ON "_services_v_rels" USING btree ("case_studies_id");
  CREATE INDEX "industries_hero_actions_order_idx" ON "industries_hero_actions" USING btree ("_order");
  CREATE INDEX "industries_hero_actions_parent_id_idx" ON "industries_hero_actions" USING btree ("_parent_id");
  CREATE INDEX "industries_blocks_content_order_idx" ON "industries_blocks_content" USING btree ("_order");
  CREATE INDEX "industries_blocks_content_parent_id_idx" ON "industries_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "industries_blocks_content_path_idx" ON "industries_blocks_content" USING btree ("_path");
  CREATE INDEX "industries_blocks_media_text_order_idx" ON "industries_blocks_media_text" USING btree ("_order");
  CREATE INDEX "industries_blocks_media_text_parent_id_idx" ON "industries_blocks_media_text" USING btree ("_parent_id");
  CREATE INDEX "industries_blocks_media_text_path_idx" ON "industries_blocks_media_text" USING btree ("_path");
  CREATE INDEX "industries_blocks_media_text_image_idx" ON "industries_blocks_media_text" USING btree ("image_id");
  CREATE INDEX "industries_blocks_media_text_inset_image_idx" ON "industries_blocks_media_text" USING btree ("inset_image_id");
  CREATE INDEX "industries_blocks_numbered_list_items_order_idx" ON "industries_blocks_numbered_list_items" USING btree ("_order");
  CREATE INDEX "industries_blocks_numbered_list_items_parent_id_idx" ON "industries_blocks_numbered_list_items" USING btree ("_parent_id");
  CREATE INDEX "industries_blocks_numbered_list_order_idx" ON "industries_blocks_numbered_list" USING btree ("_order");
  CREATE INDEX "industries_blocks_numbered_list_parent_id_idx" ON "industries_blocks_numbered_list" USING btree ("_parent_id");
  CREATE INDEX "industries_blocks_numbered_list_path_idx" ON "industries_blocks_numbered_list" USING btree ("_path");
  CREATE INDEX "industries_blocks_card_grid_cards_order_idx" ON "industries_blocks_card_grid_cards" USING btree ("_order");
  CREATE INDEX "industries_blocks_card_grid_cards_parent_id_idx" ON "industries_blocks_card_grid_cards" USING btree ("_parent_id");
  CREATE INDEX "industries_blocks_card_grid_cards_image_idx" ON "industries_blocks_card_grid_cards" USING btree ("image_id");
  CREATE INDEX "industries_blocks_card_grid_order_idx" ON "industries_blocks_card_grid" USING btree ("_order");
  CREATE INDEX "industries_blocks_card_grid_parent_id_idx" ON "industries_blocks_card_grid" USING btree ("_parent_id");
  CREATE INDEX "industries_blocks_card_grid_path_idx" ON "industries_blocks_card_grid" USING btree ("_path");
  CREATE INDEX "industries_blocks_process_steps_order_idx" ON "industries_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "industries_blocks_process_steps_parent_id_idx" ON "industries_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "industries_blocks_process_order_idx" ON "industries_blocks_process" USING btree ("_order");
  CREATE INDEX "industries_blocks_process_parent_id_idx" ON "industries_blocks_process" USING btree ("_parent_id");
  CREATE INDEX "industries_blocks_process_path_idx" ON "industries_blocks_process" USING btree ("_path");
  CREATE INDEX "industries_blocks_cta_order_idx" ON "industries_blocks_cta" USING btree ("_order");
  CREATE INDEX "industries_blocks_cta_parent_id_idx" ON "industries_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "industries_blocks_cta_path_idx" ON "industries_blocks_cta" USING btree ("_path");
  CREATE INDEX "industries_blocks_cta_image_idx" ON "industries_blocks_cta" USING btree ("image_id");
  CREATE INDEX "industries_blocks_enquiry_form_roles_order_idx" ON "industries_blocks_enquiry_form_roles" USING btree ("_order");
  CREATE INDEX "industries_blocks_enquiry_form_roles_parent_id_idx" ON "industries_blocks_enquiry_form_roles" USING btree ("_parent_id");
  CREATE INDEX "industries_blocks_enquiry_form_aside_cards_order_idx" ON "industries_blocks_enquiry_form_aside_cards" USING btree ("_order");
  CREATE INDEX "industries_blocks_enquiry_form_aside_cards_parent_id_idx" ON "industries_blocks_enquiry_form_aside_cards" USING btree ("_parent_id");
  CREATE INDEX "industries_blocks_enquiry_form_order_idx" ON "industries_blocks_enquiry_form" USING btree ("_order");
  CREATE INDEX "industries_blocks_enquiry_form_parent_id_idx" ON "industries_blocks_enquiry_form" USING btree ("_parent_id");
  CREATE INDEX "industries_blocks_enquiry_form_path_idx" ON "industries_blocks_enquiry_form" USING btree ("_path");
  CREATE INDEX "industries_blocks_insights_feed_order_idx" ON "industries_blocks_insights_feed" USING btree ("_order");
  CREATE INDEX "industries_blocks_insights_feed_parent_id_idx" ON "industries_blocks_insights_feed" USING btree ("_parent_id");
  CREATE INDEX "industries_blocks_insights_feed_path_idx" ON "industries_blocks_insights_feed" USING btree ("_path");
  CREATE INDEX "industries_hero_hero_image_idx" ON "industries" USING btree ("hero_image_id");
  CREATE INDEX "industries_card_image_idx" ON "industries" USING btree ("card_image_id");
  CREATE INDEX "industries_meta_meta_image_idx" ON "industries" USING btree ("meta_image_id");
  CREATE UNIQUE INDEX "industries_slug_idx" ON "industries" USING btree ("slug");
  CREATE INDEX "industries_order_idx" ON "industries" USING btree ("order");
  CREATE INDEX "industries_updated_at_idx" ON "industries" USING btree ("updated_at");
  CREATE INDEX "industries_created_at_idx" ON "industries" USING btree ("created_at");
  CREATE INDEX "industries__status_idx" ON "industries" USING btree ("_status");
  CREATE INDEX "industries_rels_order_idx" ON "industries_rels" USING btree ("order");
  CREATE INDEX "industries_rels_parent_idx" ON "industries_rels" USING btree ("parent_id");
  CREATE INDEX "industries_rels_path_idx" ON "industries_rels" USING btree ("path");
  CREATE INDEX "industries_rels_pages_id_idx" ON "industries_rels" USING btree ("pages_id");
  CREATE INDEX "industries_rels_services_id_idx" ON "industries_rels" USING btree ("services_id");
  CREATE INDEX "industries_rels_industries_id_idx" ON "industries_rels" USING btree ("industries_id");
  CREATE INDEX "industries_rels_education_id_idx" ON "industries_rels" USING btree ("education_id");
  CREATE INDEX "industries_rels_posts_id_idx" ON "industries_rels" USING btree ("posts_id");
  CREATE INDEX "industries_rels_case_studies_id_idx" ON "industries_rels" USING btree ("case_studies_id");
  CREATE INDEX "_industries_v_version_hero_actions_order_idx" ON "_industries_v_version_hero_actions" USING btree ("_order");
  CREATE INDEX "_industries_v_version_hero_actions_parent_id_idx" ON "_industries_v_version_hero_actions" USING btree ("_parent_id");
  CREATE INDEX "_industries_v_blocks_content_order_idx" ON "_industries_v_blocks_content" USING btree ("_order");
  CREATE INDEX "_industries_v_blocks_content_parent_id_idx" ON "_industries_v_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "_industries_v_blocks_content_path_idx" ON "_industries_v_blocks_content" USING btree ("_path");
  CREATE INDEX "_industries_v_blocks_media_text_order_idx" ON "_industries_v_blocks_media_text" USING btree ("_order");
  CREATE INDEX "_industries_v_blocks_media_text_parent_id_idx" ON "_industries_v_blocks_media_text" USING btree ("_parent_id");
  CREATE INDEX "_industries_v_blocks_media_text_path_idx" ON "_industries_v_blocks_media_text" USING btree ("_path");
  CREATE INDEX "_industries_v_blocks_media_text_image_idx" ON "_industries_v_blocks_media_text" USING btree ("image_id");
  CREATE INDEX "_industries_v_blocks_media_text_inset_image_idx" ON "_industries_v_blocks_media_text" USING btree ("inset_image_id");
  CREATE INDEX "_industries_v_blocks_numbered_list_items_order_idx" ON "_industries_v_blocks_numbered_list_items" USING btree ("_order");
  CREATE INDEX "_industries_v_blocks_numbered_list_items_parent_id_idx" ON "_industries_v_blocks_numbered_list_items" USING btree ("_parent_id");
  CREATE INDEX "_industries_v_blocks_numbered_list_order_idx" ON "_industries_v_blocks_numbered_list" USING btree ("_order");
  CREATE INDEX "_industries_v_blocks_numbered_list_parent_id_idx" ON "_industries_v_blocks_numbered_list" USING btree ("_parent_id");
  CREATE INDEX "_industries_v_blocks_numbered_list_path_idx" ON "_industries_v_blocks_numbered_list" USING btree ("_path");
  CREATE INDEX "_industries_v_blocks_card_grid_cards_order_idx" ON "_industries_v_blocks_card_grid_cards" USING btree ("_order");
  CREATE INDEX "_industries_v_blocks_card_grid_cards_parent_id_idx" ON "_industries_v_blocks_card_grid_cards" USING btree ("_parent_id");
  CREATE INDEX "_industries_v_blocks_card_grid_cards_image_idx" ON "_industries_v_blocks_card_grid_cards" USING btree ("image_id");
  CREATE INDEX "_industries_v_blocks_card_grid_order_idx" ON "_industries_v_blocks_card_grid" USING btree ("_order");
  CREATE INDEX "_industries_v_blocks_card_grid_parent_id_idx" ON "_industries_v_blocks_card_grid" USING btree ("_parent_id");
  CREATE INDEX "_industries_v_blocks_card_grid_path_idx" ON "_industries_v_blocks_card_grid" USING btree ("_path");
  CREATE INDEX "_industries_v_blocks_process_steps_order_idx" ON "_industries_v_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "_industries_v_blocks_process_steps_parent_id_idx" ON "_industries_v_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "_industries_v_blocks_process_order_idx" ON "_industries_v_blocks_process" USING btree ("_order");
  CREATE INDEX "_industries_v_blocks_process_parent_id_idx" ON "_industries_v_blocks_process" USING btree ("_parent_id");
  CREATE INDEX "_industries_v_blocks_process_path_idx" ON "_industries_v_blocks_process" USING btree ("_path");
  CREATE INDEX "_industries_v_blocks_cta_order_idx" ON "_industries_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_industries_v_blocks_cta_parent_id_idx" ON "_industries_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_industries_v_blocks_cta_path_idx" ON "_industries_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_industries_v_blocks_cta_image_idx" ON "_industries_v_blocks_cta" USING btree ("image_id");
  CREATE INDEX "_industries_v_blocks_enquiry_form_roles_order_idx" ON "_industries_v_blocks_enquiry_form_roles" USING btree ("_order");
  CREATE INDEX "_industries_v_blocks_enquiry_form_roles_parent_id_idx" ON "_industries_v_blocks_enquiry_form_roles" USING btree ("_parent_id");
  CREATE INDEX "_industries_v_blocks_enquiry_form_aside_cards_order_idx" ON "_industries_v_blocks_enquiry_form_aside_cards" USING btree ("_order");
  CREATE INDEX "_industries_v_blocks_enquiry_form_aside_cards_parent_id_idx" ON "_industries_v_blocks_enquiry_form_aside_cards" USING btree ("_parent_id");
  CREATE INDEX "_industries_v_blocks_enquiry_form_order_idx" ON "_industries_v_blocks_enquiry_form" USING btree ("_order");
  CREATE INDEX "_industries_v_blocks_enquiry_form_parent_id_idx" ON "_industries_v_blocks_enquiry_form" USING btree ("_parent_id");
  CREATE INDEX "_industries_v_blocks_enquiry_form_path_idx" ON "_industries_v_blocks_enquiry_form" USING btree ("_path");
  CREATE INDEX "_industries_v_blocks_insights_feed_order_idx" ON "_industries_v_blocks_insights_feed" USING btree ("_order");
  CREATE INDEX "_industries_v_blocks_insights_feed_parent_id_idx" ON "_industries_v_blocks_insights_feed" USING btree ("_parent_id");
  CREATE INDEX "_industries_v_blocks_insights_feed_path_idx" ON "_industries_v_blocks_insights_feed" USING btree ("_path");
  CREATE INDEX "_industries_v_parent_idx" ON "_industries_v" USING btree ("parent_id");
  CREATE INDEX "_industries_v_version_hero_version_hero_image_idx" ON "_industries_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_industries_v_version_version_card_image_idx" ON "_industries_v" USING btree ("version_card_image_id");
  CREATE INDEX "_industries_v_version_meta_version_meta_image_idx" ON "_industries_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_industries_v_version_version_slug_idx" ON "_industries_v" USING btree ("version_slug");
  CREATE INDEX "_industries_v_version_version_order_idx" ON "_industries_v" USING btree ("version_order");
  CREATE INDEX "_industries_v_version_version_updated_at_idx" ON "_industries_v" USING btree ("version_updated_at");
  CREATE INDEX "_industries_v_version_version_created_at_idx" ON "_industries_v" USING btree ("version_created_at");
  CREATE INDEX "_industries_v_version_version__status_idx" ON "_industries_v" USING btree ("version__status");
  CREATE INDEX "_industries_v_created_at_idx" ON "_industries_v" USING btree ("created_at");
  CREATE INDEX "_industries_v_updated_at_idx" ON "_industries_v" USING btree ("updated_at");
  CREATE INDEX "_industries_v_latest_idx" ON "_industries_v" USING btree ("latest");
  CREATE INDEX "_industries_v_rels_order_idx" ON "_industries_v_rels" USING btree ("order");
  CREATE INDEX "_industries_v_rels_parent_idx" ON "_industries_v_rels" USING btree ("parent_id");
  CREATE INDEX "_industries_v_rels_path_idx" ON "_industries_v_rels" USING btree ("path");
  CREATE INDEX "_industries_v_rels_pages_id_idx" ON "_industries_v_rels" USING btree ("pages_id");
  CREATE INDEX "_industries_v_rels_services_id_idx" ON "_industries_v_rels" USING btree ("services_id");
  CREATE INDEX "_industries_v_rels_industries_id_idx" ON "_industries_v_rels" USING btree ("industries_id");
  CREATE INDEX "_industries_v_rels_education_id_idx" ON "_industries_v_rels" USING btree ("education_id");
  CREATE INDEX "_industries_v_rels_posts_id_idx" ON "_industries_v_rels" USING btree ("posts_id");
  CREATE INDEX "_industries_v_rels_case_studies_id_idx" ON "_industries_v_rels" USING btree ("case_studies_id");
  CREATE INDEX "education_hero_actions_order_idx" ON "education_hero_actions" USING btree ("_order");
  CREATE INDEX "education_hero_actions_parent_id_idx" ON "education_hero_actions" USING btree ("_parent_id");
  CREATE INDEX "education_blocks_content_order_idx" ON "education_blocks_content" USING btree ("_order");
  CREATE INDEX "education_blocks_content_parent_id_idx" ON "education_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "education_blocks_content_path_idx" ON "education_blocks_content" USING btree ("_path");
  CREATE INDEX "education_blocks_media_text_order_idx" ON "education_blocks_media_text" USING btree ("_order");
  CREATE INDEX "education_blocks_media_text_parent_id_idx" ON "education_blocks_media_text" USING btree ("_parent_id");
  CREATE INDEX "education_blocks_media_text_path_idx" ON "education_blocks_media_text" USING btree ("_path");
  CREATE INDEX "education_blocks_media_text_image_idx" ON "education_blocks_media_text" USING btree ("image_id");
  CREATE INDEX "education_blocks_media_text_inset_image_idx" ON "education_blocks_media_text" USING btree ("inset_image_id");
  CREATE INDEX "education_blocks_numbered_list_items_order_idx" ON "education_blocks_numbered_list_items" USING btree ("_order");
  CREATE INDEX "education_blocks_numbered_list_items_parent_id_idx" ON "education_blocks_numbered_list_items" USING btree ("_parent_id");
  CREATE INDEX "education_blocks_numbered_list_order_idx" ON "education_blocks_numbered_list" USING btree ("_order");
  CREATE INDEX "education_blocks_numbered_list_parent_id_idx" ON "education_blocks_numbered_list" USING btree ("_parent_id");
  CREATE INDEX "education_blocks_numbered_list_path_idx" ON "education_blocks_numbered_list" USING btree ("_path");
  CREATE INDEX "education_blocks_card_grid_cards_order_idx" ON "education_blocks_card_grid_cards" USING btree ("_order");
  CREATE INDEX "education_blocks_card_grid_cards_parent_id_idx" ON "education_blocks_card_grid_cards" USING btree ("_parent_id");
  CREATE INDEX "education_blocks_card_grid_cards_image_idx" ON "education_blocks_card_grid_cards" USING btree ("image_id");
  CREATE INDEX "education_blocks_card_grid_order_idx" ON "education_blocks_card_grid" USING btree ("_order");
  CREATE INDEX "education_blocks_card_grid_parent_id_idx" ON "education_blocks_card_grid" USING btree ("_parent_id");
  CREATE INDEX "education_blocks_card_grid_path_idx" ON "education_blocks_card_grid" USING btree ("_path");
  CREATE INDEX "education_blocks_process_steps_order_idx" ON "education_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "education_blocks_process_steps_parent_id_idx" ON "education_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "education_blocks_process_order_idx" ON "education_blocks_process" USING btree ("_order");
  CREATE INDEX "education_blocks_process_parent_id_idx" ON "education_blocks_process" USING btree ("_parent_id");
  CREATE INDEX "education_blocks_process_path_idx" ON "education_blocks_process" USING btree ("_path");
  CREATE INDEX "education_blocks_cta_order_idx" ON "education_blocks_cta" USING btree ("_order");
  CREATE INDEX "education_blocks_cta_parent_id_idx" ON "education_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "education_blocks_cta_path_idx" ON "education_blocks_cta" USING btree ("_path");
  CREATE INDEX "education_blocks_cta_image_idx" ON "education_blocks_cta" USING btree ("image_id");
  CREATE INDEX "education_blocks_enquiry_form_roles_order_idx" ON "education_blocks_enquiry_form_roles" USING btree ("_order");
  CREATE INDEX "education_blocks_enquiry_form_roles_parent_id_idx" ON "education_blocks_enquiry_form_roles" USING btree ("_parent_id");
  CREATE INDEX "education_blocks_enquiry_form_aside_cards_order_idx" ON "education_blocks_enquiry_form_aside_cards" USING btree ("_order");
  CREATE INDEX "education_blocks_enquiry_form_aside_cards_parent_id_idx" ON "education_blocks_enquiry_form_aside_cards" USING btree ("_parent_id");
  CREATE INDEX "education_blocks_enquiry_form_order_idx" ON "education_blocks_enquiry_form" USING btree ("_order");
  CREATE INDEX "education_blocks_enquiry_form_parent_id_idx" ON "education_blocks_enquiry_form" USING btree ("_parent_id");
  CREATE INDEX "education_blocks_enquiry_form_path_idx" ON "education_blocks_enquiry_form" USING btree ("_path");
  CREATE INDEX "education_blocks_insights_feed_order_idx" ON "education_blocks_insights_feed" USING btree ("_order");
  CREATE INDEX "education_blocks_insights_feed_parent_id_idx" ON "education_blocks_insights_feed" USING btree ("_parent_id");
  CREATE INDEX "education_blocks_insights_feed_path_idx" ON "education_blocks_insights_feed" USING btree ("_path");
  CREATE INDEX "education_breadcrumbs_order_idx" ON "education_breadcrumbs" USING btree ("_order");
  CREATE INDEX "education_breadcrumbs_parent_id_idx" ON "education_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "education_breadcrumbs_doc_idx" ON "education_breadcrumbs" USING btree ("doc_id");
  CREATE INDEX "education_hero_hero_image_idx" ON "education" USING btree ("hero_image_id");
  CREATE INDEX "education_card_image_idx" ON "education" USING btree ("card_image_id");
  CREATE INDEX "education_meta_meta_image_idx" ON "education" USING btree ("meta_image_id");
  CREATE INDEX "education_slug_idx" ON "education" USING btree ("slug");
  CREATE INDEX "education_order_idx" ON "education" USING btree ("order");
  CREATE INDEX "education_parent_idx" ON "education" USING btree ("parent_id");
  CREATE INDEX "education_updated_at_idx" ON "education" USING btree ("updated_at");
  CREATE INDEX "education_created_at_idx" ON "education" USING btree ("created_at");
  CREATE INDEX "education__status_idx" ON "education" USING btree ("_status");
  CREATE INDEX "education_rels_order_idx" ON "education_rels" USING btree ("order");
  CREATE INDEX "education_rels_parent_idx" ON "education_rels" USING btree ("parent_id");
  CREATE INDEX "education_rels_path_idx" ON "education_rels" USING btree ("path");
  CREATE INDEX "education_rels_pages_id_idx" ON "education_rels" USING btree ("pages_id");
  CREATE INDEX "education_rels_services_id_idx" ON "education_rels" USING btree ("services_id");
  CREATE INDEX "education_rels_industries_id_idx" ON "education_rels" USING btree ("industries_id");
  CREATE INDEX "education_rels_education_id_idx" ON "education_rels" USING btree ("education_id");
  CREATE INDEX "education_rels_posts_id_idx" ON "education_rels" USING btree ("posts_id");
  CREATE INDEX "education_rels_case_studies_id_idx" ON "education_rels" USING btree ("case_studies_id");
  CREATE INDEX "_education_v_version_hero_actions_order_idx" ON "_education_v_version_hero_actions" USING btree ("_order");
  CREATE INDEX "_education_v_version_hero_actions_parent_id_idx" ON "_education_v_version_hero_actions" USING btree ("_parent_id");
  CREATE INDEX "_education_v_blocks_content_order_idx" ON "_education_v_blocks_content" USING btree ("_order");
  CREATE INDEX "_education_v_blocks_content_parent_id_idx" ON "_education_v_blocks_content" USING btree ("_parent_id");
  CREATE INDEX "_education_v_blocks_content_path_idx" ON "_education_v_blocks_content" USING btree ("_path");
  CREATE INDEX "_education_v_blocks_media_text_order_idx" ON "_education_v_blocks_media_text" USING btree ("_order");
  CREATE INDEX "_education_v_blocks_media_text_parent_id_idx" ON "_education_v_blocks_media_text" USING btree ("_parent_id");
  CREATE INDEX "_education_v_blocks_media_text_path_idx" ON "_education_v_blocks_media_text" USING btree ("_path");
  CREATE INDEX "_education_v_blocks_media_text_image_idx" ON "_education_v_blocks_media_text" USING btree ("image_id");
  CREATE INDEX "_education_v_blocks_media_text_inset_image_idx" ON "_education_v_blocks_media_text" USING btree ("inset_image_id");
  CREATE INDEX "_education_v_blocks_numbered_list_items_order_idx" ON "_education_v_blocks_numbered_list_items" USING btree ("_order");
  CREATE INDEX "_education_v_blocks_numbered_list_items_parent_id_idx" ON "_education_v_blocks_numbered_list_items" USING btree ("_parent_id");
  CREATE INDEX "_education_v_blocks_numbered_list_order_idx" ON "_education_v_blocks_numbered_list" USING btree ("_order");
  CREATE INDEX "_education_v_blocks_numbered_list_parent_id_idx" ON "_education_v_blocks_numbered_list" USING btree ("_parent_id");
  CREATE INDEX "_education_v_blocks_numbered_list_path_idx" ON "_education_v_blocks_numbered_list" USING btree ("_path");
  CREATE INDEX "_education_v_blocks_card_grid_cards_order_idx" ON "_education_v_blocks_card_grid_cards" USING btree ("_order");
  CREATE INDEX "_education_v_blocks_card_grid_cards_parent_id_idx" ON "_education_v_blocks_card_grid_cards" USING btree ("_parent_id");
  CREATE INDEX "_education_v_blocks_card_grid_cards_image_idx" ON "_education_v_blocks_card_grid_cards" USING btree ("image_id");
  CREATE INDEX "_education_v_blocks_card_grid_order_idx" ON "_education_v_blocks_card_grid" USING btree ("_order");
  CREATE INDEX "_education_v_blocks_card_grid_parent_id_idx" ON "_education_v_blocks_card_grid" USING btree ("_parent_id");
  CREATE INDEX "_education_v_blocks_card_grid_path_idx" ON "_education_v_blocks_card_grid" USING btree ("_path");
  CREATE INDEX "_education_v_blocks_process_steps_order_idx" ON "_education_v_blocks_process_steps" USING btree ("_order");
  CREATE INDEX "_education_v_blocks_process_steps_parent_id_idx" ON "_education_v_blocks_process_steps" USING btree ("_parent_id");
  CREATE INDEX "_education_v_blocks_process_order_idx" ON "_education_v_blocks_process" USING btree ("_order");
  CREATE INDEX "_education_v_blocks_process_parent_id_idx" ON "_education_v_blocks_process" USING btree ("_parent_id");
  CREATE INDEX "_education_v_blocks_process_path_idx" ON "_education_v_blocks_process" USING btree ("_path");
  CREATE INDEX "_education_v_blocks_cta_order_idx" ON "_education_v_blocks_cta" USING btree ("_order");
  CREATE INDEX "_education_v_blocks_cta_parent_id_idx" ON "_education_v_blocks_cta" USING btree ("_parent_id");
  CREATE INDEX "_education_v_blocks_cta_path_idx" ON "_education_v_blocks_cta" USING btree ("_path");
  CREATE INDEX "_education_v_blocks_cta_image_idx" ON "_education_v_blocks_cta" USING btree ("image_id");
  CREATE INDEX "_education_v_blocks_enquiry_form_roles_order_idx" ON "_education_v_blocks_enquiry_form_roles" USING btree ("_order");
  CREATE INDEX "_education_v_blocks_enquiry_form_roles_parent_id_idx" ON "_education_v_blocks_enquiry_form_roles" USING btree ("_parent_id");
  CREATE INDEX "_education_v_blocks_enquiry_form_aside_cards_order_idx" ON "_education_v_blocks_enquiry_form_aside_cards" USING btree ("_order");
  CREATE INDEX "_education_v_blocks_enquiry_form_aside_cards_parent_id_idx" ON "_education_v_blocks_enquiry_form_aside_cards" USING btree ("_parent_id");
  CREATE INDEX "_education_v_blocks_enquiry_form_order_idx" ON "_education_v_blocks_enquiry_form" USING btree ("_order");
  CREATE INDEX "_education_v_blocks_enquiry_form_parent_id_idx" ON "_education_v_blocks_enquiry_form" USING btree ("_parent_id");
  CREATE INDEX "_education_v_blocks_enquiry_form_path_idx" ON "_education_v_blocks_enquiry_form" USING btree ("_path");
  CREATE INDEX "_education_v_blocks_insights_feed_order_idx" ON "_education_v_blocks_insights_feed" USING btree ("_order");
  CREATE INDEX "_education_v_blocks_insights_feed_parent_id_idx" ON "_education_v_blocks_insights_feed" USING btree ("_parent_id");
  CREATE INDEX "_education_v_blocks_insights_feed_path_idx" ON "_education_v_blocks_insights_feed" USING btree ("_path");
  CREATE INDEX "_education_v_version_breadcrumbs_order_idx" ON "_education_v_version_breadcrumbs" USING btree ("_order");
  CREATE INDEX "_education_v_version_breadcrumbs_parent_id_idx" ON "_education_v_version_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX "_education_v_version_breadcrumbs_doc_idx" ON "_education_v_version_breadcrumbs" USING btree ("doc_id");
  CREATE INDEX "_education_v_parent_idx" ON "_education_v" USING btree ("parent_id");
  CREATE INDEX "_education_v_version_hero_version_hero_image_idx" ON "_education_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_education_v_version_version_card_image_idx" ON "_education_v" USING btree ("version_card_image_id");
  CREATE INDEX "_education_v_version_meta_version_meta_image_idx" ON "_education_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_education_v_version_version_slug_idx" ON "_education_v" USING btree ("version_slug");
  CREATE INDEX "_education_v_version_version_order_idx" ON "_education_v" USING btree ("version_order");
  CREATE INDEX "_education_v_version_version_parent_idx" ON "_education_v" USING btree ("version_parent_id");
  CREATE INDEX "_education_v_version_version_updated_at_idx" ON "_education_v" USING btree ("version_updated_at");
  CREATE INDEX "_education_v_version_version_created_at_idx" ON "_education_v" USING btree ("version_created_at");
  CREATE INDEX "_education_v_version_version__status_idx" ON "_education_v" USING btree ("version__status");
  CREATE INDEX "_education_v_created_at_idx" ON "_education_v" USING btree ("created_at");
  CREATE INDEX "_education_v_updated_at_idx" ON "_education_v" USING btree ("updated_at");
  CREATE INDEX "_education_v_latest_idx" ON "_education_v" USING btree ("latest");
  CREATE INDEX "_education_v_rels_order_idx" ON "_education_v_rels" USING btree ("order");
  CREATE INDEX "_education_v_rels_parent_idx" ON "_education_v_rels" USING btree ("parent_id");
  CREATE INDEX "_education_v_rels_path_idx" ON "_education_v_rels" USING btree ("path");
  CREATE INDEX "_education_v_rels_pages_id_idx" ON "_education_v_rels" USING btree ("pages_id");
  CREATE INDEX "_education_v_rels_services_id_idx" ON "_education_v_rels" USING btree ("services_id");
  CREATE INDEX "_education_v_rels_industries_id_idx" ON "_education_v_rels" USING btree ("industries_id");
  CREATE INDEX "_education_v_rels_education_id_idx" ON "_education_v_rels" USING btree ("education_id");
  CREATE INDEX "_education_v_rels_posts_id_idx" ON "_education_v_rels" USING btree ("posts_id");
  CREATE INDEX "_education_v_rels_case_studies_id_idx" ON "_education_v_rels" USING btree ("case_studies_id");
  CREATE INDEX "posts_hero_image_idx" ON "posts" USING btree ("hero_image_id");
  CREATE INDEX "posts_meta_meta_image_idx" ON "posts" USING btree ("meta_image_id");
  CREATE INDEX "posts_type_idx" ON "posts" USING btree ("type");
  CREATE INDEX "posts_published_at_idx" ON "posts" USING btree ("published_at");
  CREATE UNIQUE INDEX "posts_slug_idx" ON "posts" USING btree ("slug");
  CREATE INDEX "posts_updated_at_idx" ON "posts" USING btree ("updated_at");
  CREATE INDEX "posts_created_at_idx" ON "posts" USING btree ("created_at");
  CREATE INDEX "posts__status_idx" ON "posts" USING btree ("_status");
  CREATE INDEX "_posts_v_parent_idx" ON "_posts_v" USING btree ("parent_id");
  CREATE INDEX "_posts_v_version_version_hero_image_idx" ON "_posts_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_posts_v_version_meta_version_meta_image_idx" ON "_posts_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_posts_v_version_version_type_idx" ON "_posts_v" USING btree ("version_type");
  CREATE INDEX "_posts_v_version_version_published_at_idx" ON "_posts_v" USING btree ("version_published_at");
  CREATE INDEX "_posts_v_version_version_slug_idx" ON "_posts_v" USING btree ("version_slug");
  CREATE INDEX "_posts_v_version_version_updated_at_idx" ON "_posts_v" USING btree ("version_updated_at");
  CREATE INDEX "_posts_v_version_version_created_at_idx" ON "_posts_v" USING btree ("version_created_at");
  CREATE INDEX "_posts_v_version_version__status_idx" ON "_posts_v" USING btree ("version__status");
  CREATE INDEX "_posts_v_created_at_idx" ON "_posts_v" USING btree ("created_at");
  CREATE INDEX "_posts_v_updated_at_idx" ON "_posts_v" USING btree ("updated_at");
  CREATE INDEX "_posts_v_latest_idx" ON "_posts_v" USING btree ("latest");
  CREATE INDEX "case_studies_hero_image_idx" ON "case_studies" USING btree ("hero_image_id");
  CREATE INDEX "case_studies_meta_meta_image_idx" ON "case_studies" USING btree ("meta_image_id");
  CREATE INDEX "case_studies_industry_idx" ON "case_studies" USING btree ("industry_id");
  CREATE INDEX "case_studies_published_at_idx" ON "case_studies" USING btree ("published_at");
  CREATE UNIQUE INDEX "case_studies_slug_idx" ON "case_studies" USING btree ("slug");
  CREATE INDEX "case_studies_updated_at_idx" ON "case_studies" USING btree ("updated_at");
  CREATE INDEX "case_studies_created_at_idx" ON "case_studies" USING btree ("created_at");
  CREATE INDEX "case_studies__status_idx" ON "case_studies" USING btree ("_status");
  CREATE INDEX "case_studies_rels_order_idx" ON "case_studies_rels" USING btree ("order");
  CREATE INDEX "case_studies_rels_parent_idx" ON "case_studies_rels" USING btree ("parent_id");
  CREATE INDEX "case_studies_rels_path_idx" ON "case_studies_rels" USING btree ("path");
  CREATE INDEX "case_studies_rels_services_id_idx" ON "case_studies_rels" USING btree ("services_id");
  CREATE INDEX "_case_studies_v_parent_idx" ON "_case_studies_v" USING btree ("parent_id");
  CREATE INDEX "_case_studies_v_version_version_hero_image_idx" ON "_case_studies_v" USING btree ("version_hero_image_id");
  CREATE INDEX "_case_studies_v_version_meta_version_meta_image_idx" ON "_case_studies_v" USING btree ("version_meta_image_id");
  CREATE INDEX "_case_studies_v_version_version_industry_idx" ON "_case_studies_v" USING btree ("version_industry_id");
  CREATE INDEX "_case_studies_v_version_version_published_at_idx" ON "_case_studies_v" USING btree ("version_published_at");
  CREATE INDEX "_case_studies_v_version_version_slug_idx" ON "_case_studies_v" USING btree ("version_slug");
  CREATE INDEX "_case_studies_v_version_version_updated_at_idx" ON "_case_studies_v" USING btree ("version_updated_at");
  CREATE INDEX "_case_studies_v_version_version_created_at_idx" ON "_case_studies_v" USING btree ("version_created_at");
  CREATE INDEX "_case_studies_v_version_version__status_idx" ON "_case_studies_v" USING btree ("version__status");
  CREATE INDEX "_case_studies_v_created_at_idx" ON "_case_studies_v" USING btree ("created_at");
  CREATE INDEX "_case_studies_v_updated_at_idx" ON "_case_studies_v" USING btree ("updated_at");
  CREATE INDEX "_case_studies_v_latest_idx" ON "_case_studies_v" USING btree ("latest");
  CREATE INDEX "_case_studies_v_rels_order_idx" ON "_case_studies_v_rels" USING btree ("order");
  CREATE INDEX "_case_studies_v_rels_parent_idx" ON "_case_studies_v_rels" USING btree ("parent_id");
  CREATE INDEX "_case_studies_v_rels_path_idx" ON "_case_studies_v_rels" USING btree ("path");
  CREATE INDEX "_case_studies_v_rels_services_id_idx" ON "_case_studies_v_rels" USING btree ("services_id");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_card_sizes_card_filename_idx" ON "media" USING btree ("sizes_card_filename");
  CREATE INDEX "media_sizes_feature_sizes_feature_filename_idx" ON "media" USING btree ("sizes_feature_filename");
  CREATE INDEX "media_sizes_og_sizes_og_filename_idx" ON "media" USING btree ("sizes_og_filename");
  CREATE INDEX "enquiries_resume_idx" ON "enquiries" USING btree ("resume_id");
  CREATE INDEX "enquiries_updated_at_idx" ON "enquiries" USING btree ("updated_at");
  CREATE INDEX "enquiries_created_at_idx" ON "enquiries" USING btree ("created_at");
  CREATE INDEX "resumes_updated_at_idx" ON "resumes" USING btree ("updated_at");
  CREATE INDEX "resumes_created_at_idx" ON "resumes" USING btree ("created_at");
  CREATE UNIQUE INDEX "resumes_filename_idx" ON "resumes" USING btree ("filename");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_jobs_log_order_idx" ON "payload_jobs_log" USING btree ("_order");
  CREATE INDEX "payload_jobs_log_parent_id_idx" ON "payload_jobs_log" USING btree ("_parent_id");
  CREATE INDEX "payload_jobs_completed_at_idx" ON "payload_jobs" USING btree ("completed_at");
  CREATE INDEX "payload_jobs_total_tried_idx" ON "payload_jobs" USING btree ("total_tried");
  CREATE INDEX "payload_jobs_has_error_idx" ON "payload_jobs" USING btree ("has_error");
  CREATE INDEX "payload_jobs_task_slug_idx" ON "payload_jobs" USING btree ("task_slug");
  CREATE INDEX "payload_jobs_queue_idx" ON "payload_jobs" USING btree ("queue");
  CREATE INDEX "payload_jobs_wait_until_idx" ON "payload_jobs" USING btree ("wait_until");
  CREATE INDEX "payload_jobs_processing_idx" ON "payload_jobs" USING btree ("processing");
  CREATE INDEX "payload_jobs_updated_at_idx" ON "payload_jobs" USING btree ("updated_at");
  CREATE INDEX "payload_jobs_created_at_idx" ON "payload_jobs" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_services_id_idx" ON "payload_locked_documents_rels" USING btree ("services_id");
  CREATE INDEX "payload_locked_documents_rels_industries_id_idx" ON "payload_locked_documents_rels" USING btree ("industries_id");
  CREATE INDEX "payload_locked_documents_rels_education_id_idx" ON "payload_locked_documents_rels" USING btree ("education_id");
  CREATE INDEX "payload_locked_documents_rels_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("posts_id");
  CREATE INDEX "payload_locked_documents_rels_case_studies_id_idx" ON "payload_locked_documents_rels" USING btree ("case_studies_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_enquiries_id_idx" ON "payload_locked_documents_rels" USING btree ("enquiries_id");
  CREATE INDEX "payload_locked_documents_rels_resumes_id_idx" ON "payload_locked_documents_rels" USING btree ("resumes_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "homepage_hero_hub_nodes_order_idx" ON "homepage_hero_hub_nodes" USING btree ("_order");
  CREATE INDEX "homepage_hero_hub_nodes_parent_id_idx" ON "homepage_hero_hub_nodes" USING btree ("_parent_id");
  CREATE INDEX "homepage_ticker_items_order_idx" ON "homepage_ticker_items" USING btree ("_order");
  CREATE INDEX "homepage_ticker_items_parent_id_idx" ON "homepage_ticker_items" USING btree ("_parent_id");
  CREATE INDEX "homepage_approach_steps_order_idx" ON "homepage_approach_steps" USING btree ("_order");
  CREATE INDEX "homepage_approach_steps_parent_id_idx" ON "homepage_approach_steps" USING btree ("_parent_id");
  CREATE INDEX "homepage_hero_hero_hub_image_idx" ON "homepage" USING btree ("hero_hub_image_id");
  CREATE INDEX "homepage_about_about_image_idx" ON "homepage" USING btree ("about_image_id");
  CREATE INDEX "homepage_about_about_inset_image_idx" ON "homepage" USING btree ("about_inset_image_id");
  CREATE INDEX "homepage_careers_careers_image_idx" ON "homepage" USING btree ("careers_image_id");
  CREATE INDEX "homepage_cta_cta_image_idx" ON "homepage" USING btree ("cta_image_id");
  CREATE INDEX "homepage_meta_meta_image_idx" ON "homepage" USING btree ("meta_image_id");
  CREATE INDEX "homepage_rels_order_idx" ON "homepage_rels" USING btree ("order");
  CREATE INDEX "homepage_rels_parent_idx" ON "homepage_rels" USING btree ("parent_id");
  CREATE INDEX "homepage_rels_path_idx" ON "homepage_rels" USING btree ("path");
  CREATE INDEX "homepage_rels_pages_id_idx" ON "homepage_rels" USING btree ("pages_id");
  CREATE INDEX "homepage_rels_services_id_idx" ON "homepage_rels" USING btree ("services_id");
  CREATE INDEX "homepage_rels_industries_id_idx" ON "homepage_rels" USING btree ("industries_id");
  CREATE INDEX "homepage_rels_education_id_idx" ON "homepage_rels" USING btree ("education_id");
  CREATE INDEX "homepage_rels_posts_id_idx" ON "homepage_rels" USING btree ("posts_id");
  CREATE INDEX "homepage_rels_case_studies_id_idx" ON "homepage_rels" USING btree ("case_studies_id");
  CREATE INDEX "header_nav_items_links_order_idx" ON "header_nav_items_links" USING btree ("_order");
  CREATE INDEX "header_nav_items_links_parent_id_idx" ON "header_nav_items_links" USING btree ("_parent_id");
  CREATE INDEX "header_nav_items_order_idx" ON "header_nav_items" USING btree ("_order");
  CREATE INDEX "header_nav_items_parent_id_idx" ON "header_nav_items" USING btree ("_parent_id");
  CREATE INDEX "header_nav_items_promo_promo_image_idx" ON "header_nav_items" USING btree ("promo_image_id");
  CREATE INDEX "header_contact_links_order_idx" ON "header_contact_links" USING btree ("_order");
  CREATE INDEX "header_contact_links_parent_id_idx" ON "header_contact_links" USING btree ("_parent_id");
  CREATE INDEX "header_rels_order_idx" ON "header_rels" USING btree ("order");
  CREATE INDEX "header_rels_parent_idx" ON "header_rels" USING btree ("parent_id");
  CREATE INDEX "header_rels_path_idx" ON "header_rels" USING btree ("path");
  CREATE INDEX "header_rels_pages_id_idx" ON "header_rels" USING btree ("pages_id");
  CREATE INDEX "header_rels_services_id_idx" ON "header_rels" USING btree ("services_id");
  CREATE INDEX "header_rels_industries_id_idx" ON "header_rels" USING btree ("industries_id");
  CREATE INDEX "header_rels_education_id_idx" ON "header_rels" USING btree ("education_id");
  CREATE INDEX "header_rels_posts_id_idx" ON "header_rels" USING btree ("posts_id");
  CREATE INDEX "header_rels_case_studies_id_idx" ON "header_rels" USING btree ("case_studies_id");
  CREATE INDEX "footer_columns_links_order_idx" ON "footer_columns_links" USING btree ("_order");
  CREATE INDEX "footer_columns_links_parent_id_idx" ON "footer_columns_links" USING btree ("_parent_id");
  CREATE INDEX "footer_columns_order_idx" ON "footer_columns" USING btree ("_order");
  CREATE INDEX "footer_columns_parent_id_idx" ON "footer_columns" USING btree ("_parent_id");
  CREATE INDEX "footer_legal_links_order_idx" ON "footer_legal_links" USING btree ("_order");
  CREATE INDEX "footer_legal_links_parent_id_idx" ON "footer_legal_links" USING btree ("_parent_id");
  CREATE INDEX "footer_rels_order_idx" ON "footer_rels" USING btree ("order");
  CREATE INDEX "footer_rels_parent_idx" ON "footer_rels" USING btree ("parent_id");
  CREATE INDEX "footer_rels_path_idx" ON "footer_rels" USING btree ("path");
  CREATE INDEX "footer_rels_pages_id_idx" ON "footer_rels" USING btree ("pages_id");
  CREATE INDEX "footer_rels_services_id_idx" ON "footer_rels" USING btree ("services_id");
  CREATE INDEX "footer_rels_industries_id_idx" ON "footer_rels" USING btree ("industries_id");
  CREATE INDEX "footer_rels_education_id_idx" ON "footer_rels" USING btree ("education_id");
  CREATE INDEX "footer_rels_posts_id_idx" ON "footer_rels" USING btree ("posts_id");
  CREATE INDEX "footer_rels_case_studies_id_idx" ON "footer_rels" USING btree ("case_studies_id");
  CREATE INDEX "site_settings_socials_order_idx" ON "site_settings_socials" USING btree ("_order");
  CREATE INDEX "site_settings_socials_parent_id_idx" ON "site_settings_socials" USING btree ("_parent_id");
  CREATE INDEX "site_settings_og_image_idx" ON "site_settings" USING btree ("og_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_hero_actions" CASCADE;
  DROP TABLE "pages_blocks_content" CASCADE;
  DROP TABLE "pages_blocks_media_text" CASCADE;
  DROP TABLE "pages_blocks_numbered_list_items" CASCADE;
  DROP TABLE "pages_blocks_numbered_list" CASCADE;
  DROP TABLE "pages_blocks_card_grid_cards" CASCADE;
  DROP TABLE "pages_blocks_card_grid" CASCADE;
  DROP TABLE "pages_blocks_process_steps" CASCADE;
  DROP TABLE "pages_blocks_process" CASCADE;
  DROP TABLE "pages_blocks_cta" CASCADE;
  DROP TABLE "pages_blocks_enquiry_form_roles" CASCADE;
  DROP TABLE "pages_blocks_enquiry_form_aside_cards" CASCADE;
  DROP TABLE "pages_blocks_enquiry_form" CASCADE;
  DROP TABLE "pages_blocks_insights_feed" CASCADE;
  DROP TABLE "pages_breadcrumbs" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_version_hero_actions" CASCADE;
  DROP TABLE "_pages_v_blocks_content" CASCADE;
  DROP TABLE "_pages_v_blocks_media_text" CASCADE;
  DROP TABLE "_pages_v_blocks_numbered_list_items" CASCADE;
  DROP TABLE "_pages_v_blocks_numbered_list" CASCADE;
  DROP TABLE "_pages_v_blocks_card_grid_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_card_grid" CASCADE;
  DROP TABLE "_pages_v_blocks_process_steps" CASCADE;
  DROP TABLE "_pages_v_blocks_process" CASCADE;
  DROP TABLE "_pages_v_blocks_cta" CASCADE;
  DROP TABLE "_pages_v_blocks_enquiry_form_roles" CASCADE;
  DROP TABLE "_pages_v_blocks_enquiry_form_aside_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_enquiry_form" CASCADE;
  DROP TABLE "_pages_v_blocks_insights_feed" CASCADE;
  DROP TABLE "_pages_v_version_breadcrumbs" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "services_hero_actions" CASCADE;
  DROP TABLE "services_blocks_content" CASCADE;
  DROP TABLE "services_blocks_media_text" CASCADE;
  DROP TABLE "services_blocks_numbered_list_items" CASCADE;
  DROP TABLE "services_blocks_numbered_list" CASCADE;
  DROP TABLE "services_blocks_card_grid_cards" CASCADE;
  DROP TABLE "services_blocks_card_grid" CASCADE;
  DROP TABLE "services_blocks_process_steps" CASCADE;
  DROP TABLE "services_blocks_process" CASCADE;
  DROP TABLE "services_blocks_cta" CASCADE;
  DROP TABLE "services_blocks_enquiry_form_roles" CASCADE;
  DROP TABLE "services_blocks_enquiry_form_aside_cards" CASCADE;
  DROP TABLE "services_blocks_enquiry_form" CASCADE;
  DROP TABLE "services_blocks_insights_feed" CASCADE;
  DROP TABLE "services_breadcrumbs" CASCADE;
  DROP TABLE "services" CASCADE;
  DROP TABLE "services_rels" CASCADE;
  DROP TABLE "_services_v_version_hero_actions" CASCADE;
  DROP TABLE "_services_v_blocks_content" CASCADE;
  DROP TABLE "_services_v_blocks_media_text" CASCADE;
  DROP TABLE "_services_v_blocks_numbered_list_items" CASCADE;
  DROP TABLE "_services_v_blocks_numbered_list" CASCADE;
  DROP TABLE "_services_v_blocks_card_grid_cards" CASCADE;
  DROP TABLE "_services_v_blocks_card_grid" CASCADE;
  DROP TABLE "_services_v_blocks_process_steps" CASCADE;
  DROP TABLE "_services_v_blocks_process" CASCADE;
  DROP TABLE "_services_v_blocks_cta" CASCADE;
  DROP TABLE "_services_v_blocks_enquiry_form_roles" CASCADE;
  DROP TABLE "_services_v_blocks_enquiry_form_aside_cards" CASCADE;
  DROP TABLE "_services_v_blocks_enquiry_form" CASCADE;
  DROP TABLE "_services_v_blocks_insights_feed" CASCADE;
  DROP TABLE "_services_v_version_breadcrumbs" CASCADE;
  DROP TABLE "_services_v" CASCADE;
  DROP TABLE "_services_v_rels" CASCADE;
  DROP TABLE "industries_hero_actions" CASCADE;
  DROP TABLE "industries_blocks_content" CASCADE;
  DROP TABLE "industries_blocks_media_text" CASCADE;
  DROP TABLE "industries_blocks_numbered_list_items" CASCADE;
  DROP TABLE "industries_blocks_numbered_list" CASCADE;
  DROP TABLE "industries_blocks_card_grid_cards" CASCADE;
  DROP TABLE "industries_blocks_card_grid" CASCADE;
  DROP TABLE "industries_blocks_process_steps" CASCADE;
  DROP TABLE "industries_blocks_process" CASCADE;
  DROP TABLE "industries_blocks_cta" CASCADE;
  DROP TABLE "industries_blocks_enquiry_form_roles" CASCADE;
  DROP TABLE "industries_blocks_enquiry_form_aside_cards" CASCADE;
  DROP TABLE "industries_blocks_enquiry_form" CASCADE;
  DROP TABLE "industries_blocks_insights_feed" CASCADE;
  DROP TABLE "industries" CASCADE;
  DROP TABLE "industries_rels" CASCADE;
  DROP TABLE "_industries_v_version_hero_actions" CASCADE;
  DROP TABLE "_industries_v_blocks_content" CASCADE;
  DROP TABLE "_industries_v_blocks_media_text" CASCADE;
  DROP TABLE "_industries_v_blocks_numbered_list_items" CASCADE;
  DROP TABLE "_industries_v_blocks_numbered_list" CASCADE;
  DROP TABLE "_industries_v_blocks_card_grid_cards" CASCADE;
  DROP TABLE "_industries_v_blocks_card_grid" CASCADE;
  DROP TABLE "_industries_v_blocks_process_steps" CASCADE;
  DROP TABLE "_industries_v_blocks_process" CASCADE;
  DROP TABLE "_industries_v_blocks_cta" CASCADE;
  DROP TABLE "_industries_v_blocks_enquiry_form_roles" CASCADE;
  DROP TABLE "_industries_v_blocks_enquiry_form_aside_cards" CASCADE;
  DROP TABLE "_industries_v_blocks_enquiry_form" CASCADE;
  DROP TABLE "_industries_v_blocks_insights_feed" CASCADE;
  DROP TABLE "_industries_v" CASCADE;
  DROP TABLE "_industries_v_rels" CASCADE;
  DROP TABLE "education_hero_actions" CASCADE;
  DROP TABLE "education_blocks_content" CASCADE;
  DROP TABLE "education_blocks_media_text" CASCADE;
  DROP TABLE "education_blocks_numbered_list_items" CASCADE;
  DROP TABLE "education_blocks_numbered_list" CASCADE;
  DROP TABLE "education_blocks_card_grid_cards" CASCADE;
  DROP TABLE "education_blocks_card_grid" CASCADE;
  DROP TABLE "education_blocks_process_steps" CASCADE;
  DROP TABLE "education_blocks_process" CASCADE;
  DROP TABLE "education_blocks_cta" CASCADE;
  DROP TABLE "education_blocks_enquiry_form_roles" CASCADE;
  DROP TABLE "education_blocks_enquiry_form_aside_cards" CASCADE;
  DROP TABLE "education_blocks_enquiry_form" CASCADE;
  DROP TABLE "education_blocks_insights_feed" CASCADE;
  DROP TABLE "education_breadcrumbs" CASCADE;
  DROP TABLE "education" CASCADE;
  DROP TABLE "education_rels" CASCADE;
  DROP TABLE "_education_v_version_hero_actions" CASCADE;
  DROP TABLE "_education_v_blocks_content" CASCADE;
  DROP TABLE "_education_v_blocks_media_text" CASCADE;
  DROP TABLE "_education_v_blocks_numbered_list_items" CASCADE;
  DROP TABLE "_education_v_blocks_numbered_list" CASCADE;
  DROP TABLE "_education_v_blocks_card_grid_cards" CASCADE;
  DROP TABLE "_education_v_blocks_card_grid" CASCADE;
  DROP TABLE "_education_v_blocks_process_steps" CASCADE;
  DROP TABLE "_education_v_blocks_process" CASCADE;
  DROP TABLE "_education_v_blocks_cta" CASCADE;
  DROP TABLE "_education_v_blocks_enquiry_form_roles" CASCADE;
  DROP TABLE "_education_v_blocks_enquiry_form_aside_cards" CASCADE;
  DROP TABLE "_education_v_blocks_enquiry_form" CASCADE;
  DROP TABLE "_education_v_blocks_insights_feed" CASCADE;
  DROP TABLE "_education_v_version_breadcrumbs" CASCADE;
  DROP TABLE "_education_v" CASCADE;
  DROP TABLE "_education_v_rels" CASCADE;
  DROP TABLE "posts" CASCADE;
  DROP TABLE "_posts_v" CASCADE;
  DROP TABLE "case_studies" CASCADE;
  DROP TABLE "case_studies_rels" CASCADE;
  DROP TABLE "_case_studies_v" CASCADE;
  DROP TABLE "_case_studies_v_rels" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "enquiries" CASCADE;
  DROP TABLE "resumes" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_jobs_log" CASCADE;
  DROP TABLE "payload_jobs" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "homepage_hero_hub_nodes" CASCADE;
  DROP TABLE "homepage_ticker_items" CASCADE;
  DROP TABLE "homepage_approach_steps" CASCADE;
  DROP TABLE "homepage" CASCADE;
  DROP TABLE "homepage_rels" CASCADE;
  DROP TABLE "header_nav_items_links" CASCADE;
  DROP TABLE "header_nav_items" CASCADE;
  DROP TABLE "header_contact_links" CASCADE;
  DROP TABLE "header" CASCADE;
  DROP TABLE "header_rels" CASCADE;
  DROP TABLE "footer_columns_links" CASCADE;
  DROP TABLE "footer_columns" CASCADE;
  DROP TABLE "footer_legal_links" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "footer_rels" CASCADE;
  DROP TABLE "site_settings_socials" CASCADE;
  DROP TABLE "site_settings" CASCADE;
  DROP TYPE "public"."enum_pages_hero_actions_link_type";
  DROP TYPE "public"."enum_pages_hero_actions_link_style";
  DROP TYPE "public"."enum_pages_blocks_content_layout";
  DROP TYPE "public"."enum_pages_blocks_media_text_link_type";
  DROP TYPE "public"."enum_pages_blocks_card_grid_cards_icon";
  DROP TYPE "public"."enum_pages_blocks_card_grid_cards_link_type";
  DROP TYPE "public"."enum_pages_blocks_card_grid_source";
  DROP TYPE "public"."enum_pages_blocks_card_grid_style";
  DROP TYPE "public"."enum_pages_blocks_card_grid_link_type";
  DROP TYPE "public"."enum_pages_blocks_process_steps_icon";
  DROP TYPE "public"."enum_pages_blocks_process_link_type";
  DROP TYPE "public"."enum_pages_blocks_cta_link_type";
  DROP TYPE "public"."enum_pages_blocks_enquiry_form_aside_cards_link_type";
  DROP TYPE "public"."enum_pages_blocks_enquiry_form_form_type";
  DROP TYPE "public"."enum_pages_blocks_insights_feed_feed";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_version_hero_actions_link_type";
  DROP TYPE "public"."enum__pages_v_version_hero_actions_link_style";
  DROP TYPE "public"."enum__pages_v_blocks_content_layout";
  DROP TYPE "public"."enum__pages_v_blocks_media_text_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_card_grid_cards_icon";
  DROP TYPE "public"."enum__pages_v_blocks_card_grid_cards_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_card_grid_source";
  DROP TYPE "public"."enum__pages_v_blocks_card_grid_style";
  DROP TYPE "public"."enum__pages_v_blocks_card_grid_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_process_steps_icon";
  DROP TYPE "public"."enum__pages_v_blocks_process_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_cta_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_enquiry_form_aside_cards_link_type";
  DROP TYPE "public"."enum__pages_v_blocks_enquiry_form_form_type";
  DROP TYPE "public"."enum__pages_v_blocks_insights_feed_feed";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum_services_hero_actions_link_type";
  DROP TYPE "public"."enum_services_hero_actions_link_style";
  DROP TYPE "public"."enum_services_blocks_content_layout";
  DROP TYPE "public"."enum_services_blocks_media_text_link_type";
  DROP TYPE "public"."enum_services_blocks_card_grid_cards_icon";
  DROP TYPE "public"."enum_services_blocks_card_grid_cards_link_type";
  DROP TYPE "public"."enum_services_blocks_card_grid_source";
  DROP TYPE "public"."enum_services_blocks_card_grid_style";
  DROP TYPE "public"."enum_services_blocks_card_grid_link_type";
  DROP TYPE "public"."enum_services_blocks_process_steps_icon";
  DROP TYPE "public"."enum_services_blocks_process_link_type";
  DROP TYPE "public"."enum_services_blocks_cta_link_type";
  DROP TYPE "public"."enum_services_blocks_enquiry_form_aside_cards_link_type";
  DROP TYPE "public"."enum_services_blocks_enquiry_form_form_type";
  DROP TYPE "public"."enum_services_blocks_insights_feed_feed";
  DROP TYPE "public"."enum_services_icon";
  DROP TYPE "public"."enum_services_status";
  DROP TYPE "public"."enum__services_v_version_hero_actions_link_type";
  DROP TYPE "public"."enum__services_v_version_hero_actions_link_style";
  DROP TYPE "public"."enum__services_v_blocks_content_layout";
  DROP TYPE "public"."enum__services_v_blocks_media_text_link_type";
  DROP TYPE "public"."enum__services_v_blocks_card_grid_cards_icon";
  DROP TYPE "public"."enum__services_v_blocks_card_grid_cards_link_type";
  DROP TYPE "public"."enum__services_v_blocks_card_grid_source";
  DROP TYPE "public"."enum__services_v_blocks_card_grid_style";
  DROP TYPE "public"."enum__services_v_blocks_card_grid_link_type";
  DROP TYPE "public"."enum__services_v_blocks_process_steps_icon";
  DROP TYPE "public"."enum__services_v_blocks_process_link_type";
  DROP TYPE "public"."enum__services_v_blocks_cta_link_type";
  DROP TYPE "public"."enum__services_v_blocks_enquiry_form_aside_cards_link_type";
  DROP TYPE "public"."enum__services_v_blocks_enquiry_form_form_type";
  DROP TYPE "public"."enum__services_v_blocks_insights_feed_feed";
  DROP TYPE "public"."enum__services_v_version_icon";
  DROP TYPE "public"."enum__services_v_version_status";
  DROP TYPE "public"."enum_industries_hero_actions_link_type";
  DROP TYPE "public"."enum_industries_hero_actions_link_style";
  DROP TYPE "public"."enum_industries_blocks_content_layout";
  DROP TYPE "public"."enum_industries_blocks_media_text_link_type";
  DROP TYPE "public"."enum_industries_blocks_card_grid_cards_icon";
  DROP TYPE "public"."enum_industries_blocks_card_grid_cards_link_type";
  DROP TYPE "public"."enum_industries_blocks_card_grid_source";
  DROP TYPE "public"."enum_industries_blocks_card_grid_style";
  DROP TYPE "public"."enum_industries_blocks_card_grid_link_type";
  DROP TYPE "public"."enum_industries_blocks_process_steps_icon";
  DROP TYPE "public"."enum_industries_blocks_process_link_type";
  DROP TYPE "public"."enum_industries_blocks_cta_link_type";
  DROP TYPE "public"."enum_industries_blocks_enquiry_form_aside_cards_link_type";
  DROP TYPE "public"."enum_industries_blocks_enquiry_form_form_type";
  DROP TYPE "public"."enum_industries_blocks_insights_feed_feed";
  DROP TYPE "public"."enum_industries_icon";
  DROP TYPE "public"."enum_industries_status";
  DROP TYPE "public"."enum__industries_v_version_hero_actions_link_type";
  DROP TYPE "public"."enum__industries_v_version_hero_actions_link_style";
  DROP TYPE "public"."enum__industries_v_blocks_content_layout";
  DROP TYPE "public"."enum__industries_v_blocks_media_text_link_type";
  DROP TYPE "public"."enum__industries_v_blocks_card_grid_cards_icon";
  DROP TYPE "public"."enum__industries_v_blocks_card_grid_cards_link_type";
  DROP TYPE "public"."enum__industries_v_blocks_card_grid_source";
  DROP TYPE "public"."enum__industries_v_blocks_card_grid_style";
  DROP TYPE "public"."enum__industries_v_blocks_card_grid_link_type";
  DROP TYPE "public"."enum__industries_v_blocks_process_steps_icon";
  DROP TYPE "public"."enum__industries_v_blocks_process_link_type";
  DROP TYPE "public"."enum__industries_v_blocks_cta_link_type";
  DROP TYPE "public"."enum__industries_v_blocks_enquiry_form_aside_cards_link_type";
  DROP TYPE "public"."enum__industries_v_blocks_enquiry_form_form_type";
  DROP TYPE "public"."enum__industries_v_blocks_insights_feed_feed";
  DROP TYPE "public"."enum__industries_v_version_icon";
  DROP TYPE "public"."enum__industries_v_version_status";
  DROP TYPE "public"."enum_education_hero_actions_link_type";
  DROP TYPE "public"."enum_education_hero_actions_link_style";
  DROP TYPE "public"."enum_education_blocks_content_layout";
  DROP TYPE "public"."enum_education_blocks_media_text_link_type";
  DROP TYPE "public"."enum_education_blocks_card_grid_cards_icon";
  DROP TYPE "public"."enum_education_blocks_card_grid_cards_link_type";
  DROP TYPE "public"."enum_education_blocks_card_grid_source";
  DROP TYPE "public"."enum_education_blocks_card_grid_style";
  DROP TYPE "public"."enum_education_blocks_card_grid_link_type";
  DROP TYPE "public"."enum_education_blocks_process_steps_icon";
  DROP TYPE "public"."enum_education_blocks_process_link_type";
  DROP TYPE "public"."enum_education_blocks_cta_link_type";
  DROP TYPE "public"."enum_education_blocks_enquiry_form_aside_cards_link_type";
  DROP TYPE "public"."enum_education_blocks_enquiry_form_form_type";
  DROP TYPE "public"."enum_education_blocks_insights_feed_feed";
  DROP TYPE "public"."enum_education_icon";
  DROP TYPE "public"."enum_education_status";
  DROP TYPE "public"."enum__education_v_version_hero_actions_link_type";
  DROP TYPE "public"."enum__education_v_version_hero_actions_link_style";
  DROP TYPE "public"."enum__education_v_blocks_content_layout";
  DROP TYPE "public"."enum__education_v_blocks_media_text_link_type";
  DROP TYPE "public"."enum__education_v_blocks_card_grid_cards_icon";
  DROP TYPE "public"."enum__education_v_blocks_card_grid_cards_link_type";
  DROP TYPE "public"."enum__education_v_blocks_card_grid_source";
  DROP TYPE "public"."enum__education_v_blocks_card_grid_style";
  DROP TYPE "public"."enum__education_v_blocks_card_grid_link_type";
  DROP TYPE "public"."enum__education_v_blocks_process_steps_icon";
  DROP TYPE "public"."enum__education_v_blocks_process_link_type";
  DROP TYPE "public"."enum__education_v_blocks_cta_link_type";
  DROP TYPE "public"."enum__education_v_blocks_enquiry_form_aside_cards_link_type";
  DROP TYPE "public"."enum__education_v_blocks_enquiry_form_form_type";
  DROP TYPE "public"."enum__education_v_blocks_insights_feed_feed";
  DROP TYPE "public"."enum__education_v_version_icon";
  DROP TYPE "public"."enum__education_v_version_status";
  DROP TYPE "public"."enum_posts_type";
  DROP TYPE "public"."enum_posts_status";
  DROP TYPE "public"."enum__posts_v_version_type";
  DROP TYPE "public"."enum__posts_v_version_status";
  DROP TYPE "public"."enum_case_studies_status";
  DROP TYPE "public"."enum__case_studies_v_version_status";
  DROP TYPE "public"."enum_enquiries_type";
  DROP TYPE "public"."enum_enquiries_status";
  DROP TYPE "public"."enum_enquiries_contact_method";
  DROP TYPE "public"."enum_payload_jobs_log_task_slug";
  DROP TYPE "public"."enum_payload_jobs_log_state";
  DROP TYPE "public"."enum_payload_jobs_task_slug";
  DROP TYPE "public"."enum_homepage_hero_hub_nodes_icon";
  DROP TYPE "public"."enum_homepage_hero_hub_nodes_group";
  DROP TYPE "public"."enum_homepage_approach_steps_icon";
  DROP TYPE "public"."enum_homepage_hero_primary_type";
  DROP TYPE "public"."enum_homepage_hero_secondary_type";
  DROP TYPE "public"."enum_homepage_hero_aside_link_type";
  DROP TYPE "public"."enum_homepage_about_link_type";
  DROP TYPE "public"."enum_homepage_services_link_type";
  DROP TYPE "public"."enum_homepage_industries_link_type";
  DROP TYPE "public"."enum_homepage_education_link_type";
  DROP TYPE "public"."enum_homepage_approach_link_type";
  DROP TYPE "public"."enum_homepage_insights_link_type";
  DROP TYPE "public"."enum_homepage_careers_link_type";
  DROP TYPE "public"."enum_homepage_cta_link_type";
  DROP TYPE "public"."enum_header_nav_items_links_link_type";
  DROP TYPE "public"."enum_header_nav_items_link_type";
  DROP TYPE "public"."enum_header_nav_items_menu_type";
  DROP TYPE "public"."enum_header_nav_items_promo_link_type";
  DROP TYPE "public"."enum_header_contact_links_link_type";
  DROP TYPE "public"."enum_header_cta_type";
  DROP TYPE "public"."enum_header_drawer_cta_type";
  DROP TYPE "public"."enum_footer_columns_links_link_type";
  DROP TYPE "public"."enum_footer_legal_links_link_type";
  DROP TYPE "public"."enum_site_settings_socials_platform";`)
}
