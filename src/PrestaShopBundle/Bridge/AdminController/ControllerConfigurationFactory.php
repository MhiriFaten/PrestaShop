<?php
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */

declare(strict_types=1);

namespace PrestaShopBundle\Bridge\AdminController;

use PrestaShopBundle\Service\DataProvider\UserProvider;
use Tools;

/**
 * Create an instance of the controller configuration object.
 */
class ControllerConfigurationFactory
{
    /**
     * @var UserProvider
     */
    private $userProvider;

    /**
     * @param UserProvider $userProvider
     */
    public function __construct(
        UserProvider $userProvider
    ) {
        $this->userProvider = $userProvider;
    }

    /**
     * @param int $tabId
     * @param string $objectModelClassName
     * @param string $controllerNameLegacy
     * @param string $tableName
     *
     * @return ControllerConfiguration
     */
    public function create(
        int $tabId,
        string $objectModelClassName,
        string $controllerNameLegacy,
        string $tableName
    ): ControllerConfiguration {
        $controllerConfiguration = new ControllerConfiguration();
        $controllerConfiguration->tabId = $tabId;
        $controllerConfiguration->objectModelClassName = $objectModelClassName;
        $controllerConfiguration->php_self = $objectModelClassName;
        $controllerConfiguration->controllerNameLegacy = $controllerNameLegacy;
        $controllerConfiguration->tableName = $tableName;
        $controllerConfiguration->user = $this->userProvider->getUser();
        $controllerConfiguration->folderTemplate = Tools::toUnderscoreCase(substr($controllerConfiguration->controllerNameLegacy, 5)) . '/';

        $this->setLegacyCurrentIndex($controllerConfiguration);
        $this->initToken($controllerConfiguration);

        return $controllerConfiguration;
    }

    /**
     * @param ControllerConfiguration $controllerConfiguration
     *
     * @return void
     */
    private function setLegacyCurrentIndex(ControllerConfiguration $controllerConfiguration): void
    {
        $legacyCurrentIndex = 'index.php' . '?controller=' . $controllerConfiguration->controllerNameLegacy;
        if ($back = Tools::getValue('back')) {
            $legacyCurrentIndex .= '&back=' . urlencode($back);
        }

        $controllerConfiguration->legacyCurrentIndex = $legacyCurrentIndex;
    }

    /**
     * @return void
     */
    private function initToken(ControllerConfiguration $controllerConfiguration): void
    {
        $controllerConfiguration->token = Tools::getAdminToken(
            $controllerConfiguration->controllerNameLegacy .
            (int) $controllerConfiguration->tabId .
            (int) $controllerConfiguration->user->getData()->id
        );
    }
}
