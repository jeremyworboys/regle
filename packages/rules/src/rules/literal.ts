import type { Maybe, RegleRuleDefinition } from '@regle/core';
import { computed, toValue, type MaybeRefOrGetter } from 'vue';
import { isFilled, withMessage, withParams } from '../helpers';

/**
 * Allow only one possible literal value
 */
export function literal<const TValue extends string | number>(
  literal: MaybeRefOrGetter<TValue>
): RegleRuleDefinition<TValue, [literal: TValue], false, boolean, string | number> {
  const params = computed<string | number>(() => toValue(literal));

  const rule = withMessage(
    withParams(
      (value: Maybe<string | number>, literal) => {
        return literal === value;
      },
      [params]
    ),
    ({ $params: [literal] }) => `Value should be ${literal}.`
  );

  return rule as any;
}
