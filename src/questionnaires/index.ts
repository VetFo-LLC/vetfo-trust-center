import type { Questionnaire, QuestionnaireMeta } from './types';

// VetFo does not publish pre-filled security questionnaires yet. Add them here
// (see ./types.ts) and they appear on the page automatically.
export const allQuestionnaires: Questionnaire[] = [];

export const questionnaireMeta: QuestionnaireMeta[] = allQuestionnaires.map((q) => ({
  name: q.name,
  slug: q.slug,
  description: q.description,
  enabled: q.enabled,
  questionCount: q.sections.reduce((sum, s) => sum + s.questions.length, 0),
  sectionCount: q.sections.length,
  version: q.version,
}));
