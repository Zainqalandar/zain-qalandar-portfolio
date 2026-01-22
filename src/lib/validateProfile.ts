import type { Profile } from '@/types/profile';

export function validateProfile(profile: Profile) {
	const errors: string[] = [];

	if (!profile.basic?.fullName?.trim()) {
		errors.push('basic.fullName is required');
	}

	if (!profile.basic?.headline?.trim()) {
		errors.push('basic.headline is required');
	}

	if (!profile.contact?.email?.trim()) {
		errors.push('contact.email is required');
	}

	if (!profile.projects || profile.projects.length === 0) {
		errors.push('projects must include at least one item');
	}

	if (!profile.images?.avatar?.trim()) {
		errors.push('images.avatar is required');
	}

	if (!profile.seo?.siteTitle?.trim()) {
		errors.push('seo.siteTitle is required');
	}

	if (!profile.seo?.siteDescription?.trim()) {
		errors.push('seo.siteDescription is required');
	}

	if (errors.length > 0) {
		throw new Error(`Profile validation failed:\n- ${errors.join('\n- ')}`);
	}
}
